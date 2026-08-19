const quizletField = textZh => ({
  textZh,
  status: "present",
  confidence: "high",
  reviewStatus: "reviewed",
  reviewNote: null,
  source: "Quizlet",
  sourceDocument: "quizet.docx",
  sourcePriority: 1,
  userVerified: true
});

export const quizletOverrides = {
  "trapezius": {
    origin: "枕骨-T12棘突",
    insertion: "锁骨外三分之一",
    action: "上束-肩胛骨抬高、上旋，颈侧屈、伸展；中束-肩胛骨内收；下束-肩胛骨下沉、上旋"
  },
  "levator-scapulae": {
    origin: "C1-C4横突",
    insertion: "肩胛骨内侧缘上部",
    action: "肩胛骨提升、下沉"
  },
  "rhomboid-minor": {
    origin: "C7-T1棘突",
    insertion: "肩胛骨内侧缘",
    action: "肩胛骨内收、下旋、提升"
  },
  "rhomboid-major": {
    origin: "T2-T5棘突",
    insertion: "肩胛冈下的肩胛骨内侧缘",
    action: "肩胛骨内收、下旋、提升"
  },
  "serratus-anterior": {
    origin: "1-9肋外侧面",
    insertion: "肩胛骨内侧缘前面",
    action: "肩胛骨上提、下沉、外展、固定时提升肋骨"
  },
  "pectoralis-minor": {
    origin: "3-5肋",
    insertion: "肩胛骨喙突",
    action: "肩胛骨下沉、下旋、外展，提肋骨"
  },
  "deltoid": {
    origin: "锁骨外三分之一处、肩峰、肩胛冈",
    insertion: "三角肌粗隆",
    action: "肩关节的屈曲、伸展、内外旋、水平外展内收"
  },
  "pectoralis-major": {
    origin: "锁骨内半侧、胸骨、1-6肋软骨",
    insertion: "肱骨结节",
    action: "肩关节内收、内旋，手臂内旋、水平内收、屈曲，肩胛骨下沉、下旋、外展"
  },
  "coracobrachialis": {
    origin: "肩胛骨喙突",
    insertion: "肱骨体的中间内侧",
    action: "肩关节处手臂的屈曲、内收"
  },
  "latissimus-dorsi": {
    origin: "T7-T12和L1-L5棘突，髂嵴后三分之一，9-12肋，肩胛骨下角",
    insertion: "肱骨结节间沟",
    action: "肩关节内收、伸展、内旋、下沉"
  },
  "teres-major": {
    origin: "肩胛骨下角",
    insertion: "肱骨小结节嵴",
    action: "肩关节内收、伸展、内旋"
  },
  "supraspinatus": {
    origin: "冈上窝",
    insertion: "肱骨大结节",
    action: "肩关节外展，稳定肱骨头在关节盂"
  },
  "infraspinatus": {
    origin: "冈下窝",
    insertion: "肱骨大结节",
    action: "肩关节外旋，稳定肱骨头在关节盂"
  },
  "teres-minor": {
    origin: "肩胛骨外侧缘后三分之二",
    insertion: "肱骨大结节",
    action: "肩关节外旋、内收，稳定肱骨头在关节盂"
  },
  "subscapularis": {
    origin: "肩胛下窝",
    insertion: "肱骨小关节",
    action: "肩关节内收，稳定肱骨头在关节盂"
  },
  "triceps-brachii": {
    origin: "肩胛骨盂下结节",
    insertion: "尺骨鹰嘴",
    action: "肩关节、肘关节伸展"
  },
  "biceps-brachii": {
    origin: "肩胛骨盂上结节、肩胛骨喙突",
    insertion: "桡骨粗隆",
    action: "肩、肘关节屈曲，前臂旋后"
  },
  "erector-spinae": {
    origin: "骶骨",
    insertion: "枕骨",
    action: "头颈向同侧伸展、侧屈、旋转",
    additionalStudyInfo: [{
      labelZh: "组成",
      textZh: "棘肌、最长肌、髂肋肌",
      source: "Quizlet",
      sourceDocument: "quizet.docx",
      sourcePriority: 1,
      userVerified: true
    }]
  },
  "longus-capitis": {
    origin: "C3-C6横突",
    insertion: "枕骨下",
    action: "头颈部弯曲、侧屈、旋转"
  },
  "longus-colli": {
    origin: "C3-C5锥体及横突",
    action: "颈屈曲"
  },
  "external-oblique": {
    origin: "5-12肋外表面",
    insertion: "髂其前部、腹部腱膜直到白线",
    action: "脊柱侧屈、向对侧旋转，脊柱屈曲，压缩腹部"
  },
  "quadratus-lumborum": {
    origin: "髂后嵴",
    insertion: "12肋和1-4腰椎横突",
    action: "单侧-提骨盆，脊柱侧屈，协助脊柱后伸、双侧-被动呼吸时固定最后肋"
  },
  "rectus-abdominis": {
    origin: "耻骨嵴，耻骨联合",
    insertion: "5-7肋软骨和剑突",
    action: "前曲脊柱，后倾骨盆"
  },
  "scalenes": {
    origin: "颈椎横突",
    insertion: "前、中止于1肋，后止于2肋",
    action: "深吸气时帮助提升肋骨"
  },
  "sternocleidomastoid": {
    origin: "胸骨头-胸骨柄顶端，锁骨头-锁骨内三分之一",
    insertion: "乳突外侧面和枕骨项线",
    action: "颈部屈曲、侧屈、伸展，头向对侧旋转，脊柱侧屈"
  },
  "internal-oblique": {
    origin: "腹股沟韧带侧部，髂嵴和胸腰筋膜",
    insertion: "下三肋内表面，腹部腱膜直到白线",
    action: "单侧-向同侧侧屈脊柱、向同侧旋转脊柱\n双侧：脊柱前屈，压缩腹部"
  },
  "transversus-abdominis": {
    origin: "腹股沟韧带侧部，胸腰筋膜"
  }
};

export function applyQuizletOverrides(records) {
  const byId = new Map(records.map(record => [record.id, record]));
  const audit = {
    cardsFound: Object.keys(quizletOverrides).length,
    matched: 0,
    recordsUpdated: 0,
    fieldsReplaced: 0,
    unmatchedIds: []
  };

  for (const [id, override] of Object.entries(quizletOverrides)) {
    const target = byId.get(id);
    if (!target) {
      audit.unmatchedIds.push(id);
      continue;
    }
    audit.matched += 1;
    audit.recordsUpdated += 1;
    for (const field of ["origin", "insertion", "action", "innervation"]) {
      if (Object.hasOwn(override, field) && override[field] !== "") {
        target[field] = quizletField(override[field]);
        audit.fieldsReplaced += 1;
      }
    }
    if (override.additionalStudyInfo) {
      target.additionalStudyInfo = override.additionalStudyInfo;
    }
    target.quizletProvenance = {
      source: "Quizlet",
      sourceDocument: "quizet.docx",
      matchStatus: "confident",
      matchedBy: "Chinese muscle name"
    };
  }
  return audit;
}
