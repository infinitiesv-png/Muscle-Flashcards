import { muscles } from "./data/muscles.js";
import { remainingMuscles } from "./data/remaining-muscles.js";
import { applyQuizletOverrides } from "./data/quizlet-overrides.js";
import { applyManualImageOverrides } from "./data/manual-image-overrides.js";

const elements = Object.fromEntries([
  "card", "progress", "muscle-image", "image-pending", "name-zh", "name-en", "pronunciation",
  "facts", "source-note", "speak", "previous", "shuffle", "next", "review",
  "know", "status"
].map(id => [id, document.getElementById(id)]));

let deck = [...muscles, ...remainingMuscles];
applyQuizletOverrides(deck);
applyManualImageOverrides(deck);
let index = 0;
let flipped = false;
const feedback = new Map();

const labels = [
  ["Origin｜起点", "origin"],
  ["Insertion｜止点", "insertion"],
  ["Action｜功能", "action"],
  ["Innervation｜神经支配", "innervation"]
];

function fieldMarkup(label, field) {
  const missing = !field || field.status === "missing";
  const value = missing
    ? (field?.reviewStatus === "needs_review" ? "Needs review｜尚未可靠转录" : "原始 PDF 中未提供")
    : field.textZh;
  const review = field?.reviewStatus === "needs_review";
  const reviewNote = review && field.reviewNote
    ? `<span class="field-review">Needs review｜${escapeHtml(field.reviewNote)}</span>`
    : "";
  return `<span class="fact ${missing ? "is-missing" : ""} ${review ? "needs-review" : ""}">
    <span class="fact-label">${label}</span>
    <span class="fact-value">${escapeHtml(value).replaceAll("\n", "<br>")}${reviewNote}</span>
  </span>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
}

function render() {
  const muscle = deck[index];
  flipped = false;
  elements.card.classList.remove("is-flipped");
  elements.card.setAttribute("aria-pressed", "false");
  elements["muscle-image"].hidden = false;
  elements["image-pending"].hidden = true;
  elements["muscle-image"].src = muscle.image.path;
  elements["name-zh"].textContent = muscle.nameZh;
  elements["name-en"].textContent = muscle.terminology.nameEn;
  elements.pronunciation.textContent = muscle.terminology.pronunciationHint;
  elements.facts.innerHTML = labels.map(([label, key]) => fieldMarkup(label, muscle[key])).join("");
  const reviewStatus = muscle.source.reviewStatus || "reviewed";
  elements["source-note"].innerHTML = `
    <span>Source: ${escapeHtml(muscle.source.pdf)}, p. ${muscle.source.page}</span>
    <span>Transcription: ${escapeHtml(muscle.source.transcriptionStatus.replaceAll("_", " "))}</span>
    <span>Confidence: ${escapeHtml(muscle.source.confidence)}</span>
    <span>Review: ${escapeHtml(reviewStatus.replaceAll("_", " "))}</span>`;
  elements.progress.textContent = `${index + 1} / ${deck.length}`;
  elements.status.textContent = feedback.has(muscle.id)
    ? `Marked: ${feedback.get(muscle.id)}`
    : "Flip the card when you have an answer.";
}

function flip() {
  flipped = !flipped;
  elements.card.classList.toggle("is-flipped", flipped);
  elements.card.setAttribute("aria-pressed", String(flipped));
}

function move(amount) {
  index = (index + amount + deck.length) % deck.length;
  render();
}

function shuffle() {
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  index = 0;
  render();
  elements.status.textContent = "Deck shuffled.";
}

function mark(result) {
  feedback.set(deck[index].id, result);
  elements.status.textContent = `Marked: ${result}`;
  window.setTimeout(() => move(1), 350);
}

function speak(event) {
  event.stopPropagation();
  if (!("speechSynthesis" in window)) {
    elements.status.textContent = "Text-to-speech is unavailable in this browser.";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(deck[index].terminology.nameEn);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

elements.card.addEventListener("click", flip);
elements["muscle-image"].addEventListener("load", () => {
  elements["muscle-image"].hidden = false;
  elements["image-pending"].hidden = true;
});
elements["muscle-image"].addEventListener("error", () => {
  elements["muscle-image"].hidden = true;
  elements["image-pending"].hidden = false;
});
elements.speak.addEventListener("click", speak);
elements.speak.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") speak(event);
});
elements.previous.addEventListener("click", () => move(-1));
elements.next.addEventListener("click", () => move(1));
elements.shuffle.addEventListener("click", shuffle);
elements.review.addEventListener("click", () => mark("Review again"));
elements.know.addEventListener("click", () => mark("Know it"));
document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "ArrowRight") move(1);
  if (event.key === " " && event.target === document.body) {
    event.preventDefault();
    flip();
  }
});

render();
