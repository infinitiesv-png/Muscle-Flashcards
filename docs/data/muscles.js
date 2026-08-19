export const muscleGroups = [
  {
    id: "deltoid-parts",
    type: "source_defined_parts",
    nameZh: "三角肌肌束",
    memberLabelsZh: ["前部肌束", "中部肌束", "后部肌束"],
    source: { pdf: "1.肌肉参考.pdf", page: 6 }
  },
  {
    id: "pectoralis-major-parts",
    type: "source_defined_parts",
    nameZh: "胸大肌三部分",
    memberLabelsZh: ["锁骨部", "胸骨部", "肋骨部"],
    source: { pdf: "1.肌肉参考.pdf", page: 7 }
  },
  {
    id: "biceps-heads",
    type: "source_defined_parts",
    nameZh: "肱二头肌两头",
    memberLabelsZh: ["短头", "长头"],
    source: { pdf: "1.肌肉参考.pdf", page: 13 }
  },
  {
    id: "triceps-heads",
    type: "source_defined_parts",
    nameZh: "肱三头肌三个头",
    memberLabelsZh: ["长头", "外侧头", "内侧头"],
    source: { pdf: "1.肌肉参考.pdf", page: 12 }
  }
];

const sourceField = (text, confidence = "high") => ({
  textZh: text,
  status: text ? "present" : "missing",
  confidence
});

export const muscles = [
  {
    id: "pectoralis-minor",
    recordType: "muscle",
    nameZh: "胸小肌",
    terminology: { nameEn: "Pectoralis minor", pronunciationHint: "pek-tuh-RAL-iss MY-nor", provenance: "added_standard_english" },
    action: sourceField("下拉、外展或下旋肩胛骨，肩胛骨固定时，上提胸廓以辅助吸气"),
    origin: sourceField("第3～5肋骨"),
    insertion: sourceField("肩胛骨喙突内侧面"),
    innervation: sourceField("胸内侧神经、与胸外侧神经交通支，C6～8，T1"),
    relationships: { memberOf: [], components: [] },
    image: { path: "assets/muscles/pectoralis-minor.jpg", association: "direct", confidence: "high", replaceable: true },
    source: { pdf: "1.肌肉参考.pdf", page: 5, transcriptionStatus: "visually_verified", confidence: "high" }
  },
  {
    id: "deltoid",
    recordType: "muscle",
    nameZh: "三角肌",
    terminology: { nameEn: "Deltoid", pronunciationHint: "DEL-toyd", provenance: "added_standard_english" },
    action: sourceField("所有肌束：\n外展肩关节（盂肱关节）\n前部肌束：\n屈曲肩关节（盂肱关节）\n内旋肩关节（盂肱关节）\n水平内收肩关节（盂肱关节）\n后部肌束：\n伸展肩关节（盂肱关节）\n外旋肩关节（盂肱关节）\n水平外展肩关节（盂肱关节）"),
    origin: sourceField("锁骨外侧1/3、肩峰和肩胛冈"),
    insertion: sourceField("三角肌粗隆"),
    innervation: sourceField("腋神经，C5，6"),
    relationships: { memberOf: [], components: ["deltoid-parts"] },
    image: { path: "assets/muscles/deltoid.jpg", association: "direct", confidence: "high", replaceable: true },
    source: { pdf: "1.肌肉参考.pdf", page: 6, transcriptionStatus: "visually_verified", confidence: "high" }
  },
  {
    id: "pectoralis-major",
    recordType: "muscle",
    nameZh: "胸大肌",
    terminology: { nameEn: "Pectoralis major", pronunciationHint: "pek-tuh-RAL-iss MAY-jer", provenance: "added_standard_english" },
    action: sourceField("所有肌纤维：\n内收、内旋肩关节\n上肢固定，被动吸气时，辅助提升胸廓\n上部肌纤维：屈肩关节，水平内收肩关节\n下部肌纤维：伸肩关节"),
    origin: sourceField("锁骨内侧半，胸骨，第1～6肋软骨"),
    insertion: sourceField("肱骨大结节嵴"),
    innervation: sourceField("上部肌纤维：胸外侧神经 C5～7\n下部肌纤维：胸内侧神经和胸外侧神经 C6～8，T1"),
    relationships: { memberOf: [], components: ["pectoralis-major-parts"] },
    image: { path: "assets/muscles/pectoralis-major.jpg", association: "direct", confidence: "high", replaceable: true },
    source: { pdf: "1.肌肉参考.pdf", page: 7, transcriptionStatus: "visually_verified", confidence: "high" }
  },
  {
    id: "coracobrachialis",
    recordType: "muscle",
    nameZh: "喙肱肌",
    terminology: { nameEn: "Coracobrachialis", pronunciationHint: "KOR-uh-koh-bray-kee-AL-iss", provenance: "added_standard_english" },
    action: sourceField("前屈和内收肩关节"),
    origin: sourceField("肩胛骨喙突"),
    insertion: sourceField("肱骨干中部内侧面"),
    innervation: sourceField("肌皮神经，C6，7"),
    relationships: { memberOf: [], components: [] },
    image: { path: "assets/muscles/coracobrachialis.jpg", association: "direct", confidence: "high", replaceable: true },
    source: { pdf: "1.肌肉参考.pdf", page: 8, transcriptionStatus: "visually_verified", confidence: "high" }
  },
  {
    id: "triceps-brachii",
    recordType: "muscle",
    nameZh: "肱三头肌",
    terminology: { nameEn: "Triceps brachii", pronunciationHint: "TRY-seps BRAY-kee-eye", provenance: "added_standard_english" },
    action: sourceField("三个头：伸肘关节\n长头：后伸、内收肩关节"),
    origin: sourceField("长头：肩胛骨盂下结节\n外侧头：肱骨近端上部后面\n内侧头：肱骨远端上部后面"),
    insertion: sourceField("尺骨鹰嘴"),
    innervation: sourceField("桡神经 C6～8，T1"),
    relationships: { memberOf: [], components: ["triceps-heads"] },
    image: { path: "assets/muscles/triceps-brachii.jpg", association: "direct", confidence: "high", replaceable: true },
    source: { pdf: "1.肌肉参考.pdf", page: 12, transcriptionStatus: "visually_verified", confidence: "high" }
  },
  {
    id: "biceps-brachii",
    recordType: "muscle",
    nameZh: "肱二头肌",
    terminology: { nameEn: "Biceps brachii", pronunciationHint: "BY-seps BRAY-kee-eye", provenance: "added_standard_english" },
    action: sourceField("屈曲肘关节\n前臂旋后\n屈曲肩关节"),
    origin: sourceField("短头：肩胛骨喙突\n长头：肩胛骨盂上结节"),
    insertion: sourceField("桡骨粗隆和肱二头肌腱膜"),
    innervation: sourceField("肌皮神经，C5，6"),
    relationships: { memberOf: [], components: ["biceps-heads"] },
    image: { path: "assets/muscles/biceps-brachii.jpg", association: "direct", confidence: "high", replaceable: true },
    source: { pdf: "1.肌肉参考.pdf", page: 13, transcriptionStatus: "visually_verified", confidence: "high" }
  },
  {
    id: "anconeus",
    recordType: "muscle",
    nameZh: "肘肌",
    terminology: { nameEn: "Anconeus", pronunciationHint: "ang-KOH-nee-us", provenance: "added_standard_english" },
    action: sourceField("伸肘（肱尺关节）"),
    origin: sourceField("肱骨外上髁"),
    insertion: sourceField("鹰嘴和尺骨近端后缘"),
    innervation: sourceField("桡神经，C7，8"),
    relationships: { memberOf: [], components: [] },
    image: { path: "assets/muscles/anconeus.jpg", association: "direct", confidence: "high", replaceable: true },
    source: { pdf: "2.pdf", page: 11, transcriptionStatus: "visually_verified", confidence: "high" }
  },
  {
    id: "pronator-quadratus",
    recordType: "muscle",
    nameZh: "旋前方肌",
    terminology: { nameEn: "Pronator quadratus", pronunciationHint: "PROH-nay-ter kwah-DRAY-tus", provenance: "added_standard_english" },
    action: sourceField("前臂旋前（尺桡关节）"),
    origin: sourceField("尺骨远端前内侧面"),
    insertion: sourceField("桡骨远端前外侧面"),
    innervation: sourceField("正中神经，C7，8，T1"),
    relationships: { memberOf: [], components: [] },
    image: { path: "assets/muscles/pronator-quadratus.jpg", association: "direct", confidence: "high", replaceable: true },
    source: { pdf: "2.pdf", page: 12, transcriptionStatus: "visually_verified", confidence: "high" }
  }
];

// These original prototype assets are temporary crops derived from the PDFs.
// Manual image overrides replace this metadata at runtime when an exact match exists.
for (const muscle of muscles) {
  muscle.image.source = "PDF";
  muscle.image.sourceType = "temporary_pdf_crop";
  muscle.image.sourcePriority = 2;
}
