export const manualImageOverrides = {
  "deltoid": "三角肌.png",
  "supraspinatus": "冈上肌.png",
  "infraspinatus": "冈下肌.png",
  "serratus-anterior": "前锯肌.png",
  "coracobrachialis": "喙肱肌.png",
  "teres-major": "大圆肌.png",
  "rhomboid-major": "大菱形肌.png",
  "longus-capitis": "头长肌.png",
  "teres-minor": "小圆肌.png",
  "rhomboid-minor": "小菱形肌.png",
  "trapezius": "斜方肌.png",
  "scalenes": "斜角肌.png",
  "erector-spinae": "竖脊肌.png",
  "levator-scapulae": "肩胛提肌.png",
  "triceps-brachii": "肱三头肌.png",
  "biceps-brachii": "肱二头肌.png",
  "latissimus-dorsi": "背阔肌.png",
  "pectoralis-major": "胸大肌.png",
  "pectoralis-minor": "胸小肌.png",
  "sternocleidomastoid": "胸锁乳突肌.png",
  "quadratus-lumborum": "腰方肌.png",
  "internal-oblique": "腹内斜肌.png",
  "external-oblique": "腹外斜肌.png",
  "transversus-abdominis": "腹横肌.png",
  "rectus-abdominis": "腹直肌.png",
  "longus-colli": "颈长肌.png"
};

export function applyManualImageOverrides(records) {
  const byId = new Map(records.map(record => [record.id, record]));
  const audit = {
    confidentlyMatched: 0,
    recordsUpdated: 0,
    unmatchedRecordIds: []
  };

  for (const [id, filename] of Object.entries(manualImageOverrides)) {
    const target = byId.get(id);
    if (!target) {
      audit.unmatchedRecordIds.push(id);
      continue;
    }
    target.image = {
      path: `assets/muscles/${filename}`,
      source: "User",
      sourceType: "manually_supplied",
      sourcePriority: 1,
      association: "exact_chinese_filename",
      confidence: "high",
      reviewStatus: "reviewed",
      replaceable: true,
      originalFilePreserved: true
    };
    audit.confidentlyMatched += 1;
    audit.recordsUpdated += 1;
  }
  return audit;
}
