const missing = () => ({ textZh: null, status: "missing", confidence: "low", reviewStatus: "needs_review" });

function record(id, nameZh, nameEn, pronunciationHint, pdf, page, options = {}) {
  return {
    id,
    recordType: options.recordType || "muscle",
    nameZh,
    terminology: { nameEn, pronunciationHint, provenance: "added_standard_english" },
    action: missing(), origin: missing(), insertion: missing(), innervation: missing(),
    relationships: {
      memberOf: options.memberOf || [],
      members: options.members || [],
      components: []
    },
    image: {
      path: `assets/source-pages/${options.image || `${pdf === "1.肌肉参考.pdf" ? "pdf1" : pdf === "2.pdf" ? "pdf2" : "pdf3"}-p${String(page).padStart(2, "0")}.jpg`}`,
      source: "PDF",
      sourceType: "temporary_pdf_crop",
      sourcePriority: 2,
      association: options.imageAssociation || "page_level",
      confidence: options.imageConfidence || "medium",
      replaceable: true,
      reviewStatus: "needs_review"
    },
    source: {
      pdf, page,
      transcriptionStatus: "identified_fields_pending_review",
      confidence: options.confidence || "medium",
      reviewStatus: "needs_review"
    }
  };
}

const p1 = "1.肌肉参考.pdf";
const p2 = "2.pdf";
const p3 = "3肌肉.pdf";

export const remainingMuscles = [
  record("trapezius", "斜方肌", "Trapezius", "truh-PEE-zee-us", p1, 1),
  record("levator-scapulae", "肩胛提肌", "Levator scapulae", "leh-VAY-ter SKAP-yoo-lee", p1, 2),
  record("rhomboid-group", "大菱形肌和小菱形肌", "Rhomboid muscles", "ROM-boyd muscles", p1, 3, { recordType: "muscle_group", members: ["rhomboid-major", "rhomboid-minor"] }),
  record("rhomboid-major", "大菱形肌", "Rhomboid major", "ROM-boyd MAY-jer", p1, 3, { memberOf: ["rhomboid-group"] }),
  record("rhomboid-minor", "小菱形肌", "Rhomboid minor", "ROM-boyd MY-nor", p1, 3, { memberOf: ["rhomboid-group"] }),
  record("serratus-anterior", "前锯肌", "Serratus anterior", "seh-RAY-tus an-TEER-ee-or", p1, 4),
  record("latissimus-dorsi", "背阔肌", "Latissimus dorsi", "luh-TISS-ih-mus DOR-sigh", p1, 9),
  record("teres-major", "大圆肌", "Teres major", "TEER-eez MAY-jer", p1, 9),
  record("rotator-cuff", "肩袖肌群", "Rotator cuff muscles", "ROH-tay-ter cuff muscles", p1, 10, { recordType: "muscle_group", members: ["supraspinatus", "infraspinatus", "teres-minor", "subscapularis"] }),
  record("supraspinatus", "冈上肌", "Supraspinatus", "soo-pruh-spy-NAY-tus", p1, 11, { memberOf: ["rotator-cuff"] }),
  record("infraspinatus", "冈下肌", "Infraspinatus", "in-fruh-spy-NAY-tus", p1, 11, { memberOf: ["rotator-cuff"] }),
  record("teres-minor", "小圆肌", "Teres minor", "TEER-eez MY-nor", p1, 11, { memberOf: ["rotator-cuff"] }),
  record("subscapularis", "肩胛下肌", "Subscapularis", "sub-skap-yoo-LAIR-iss", p1, 11, { memberOf: ["rotator-cuff"] }),

  record("erector-spinae", "竖脊肌", "Erector spinae", "eh-REK-ter SPY-nee", p2, 1, { recordType: "muscle_group", members: ["iliocostalis", "longissimus", "spinalis"] }),
  record("iliocostalis", "髂肋肌", "Iliocostalis", "ill-ee-oh-kos-TAL-iss", p2, 1, { memberOf: ["erector-spinae"] }),
  record("longissimus", "最长肌", "Longissimus", "lon-JISS-ih-mus", p2, 1, { memberOf: ["erector-spinae"] }),
  record("spinalis", "棘肌", "Spinalis", "spy-NAL-iss", p2, 1, { memberOf: ["erector-spinae"] }),
  record("longus-capitis", "头长肌", "Longus capitis", "LONG-gus KAP-ih-tis", p2, 2),
  record("longus-colli", "颈长肌", "Longus colli", "LONG-gus KOL-eye", p2, 2),
  record("external-oblique", "腹外斜肌", "External oblique", "ek-STER-nal oh-BLEEK", p2, 3),
  record("quadratus-lumborum", "腰方肌", "Quadratus lumborum", "kwah-DRAY-tus lum-BOR-um", p2, 4),
  record("rectus-abdominis", "腹直肌", "Rectus abdominis", "REK-tus ab-DOM-ih-nis", p2, 5),
  record("scalenes", "斜角肌", "Scalene muscles", "SKAY-leen muscles", p2, 6, { recordType: "muscle_group" }),
  record("sternocleidomastoid", "胸锁乳突肌", "Sternocleidomastoid", "STUR-noh-KLY-doh-MAS-toyd", p2, 7),
  record("internal-oblique", "腹内斜肌", "Internal oblique", "in-TER-nal oh-BLEEK", p2, 8),
  record("transversus-abdominis", "腹横肌", "Transversus abdominis", "trans-VUR-sus ab-DOM-ih-nis", p2, 8),
  record("cremaster", "提睾肌", "Cremaster muscle", "kree-MAS-ter muscle", p2, 8, { confidence: "low" }),
  record("transversospinalis", "横棘肌", "Transversospinalis muscles", "trans-vur-soh-spy-NAL-iss", p2, 9, { recordType: "muscle_group", members: ["semispinalis", "multifidus", "rotatores"] }),
  record("semispinalis", "半棘肌", "Semispinalis", "sem-ee-spy-NAL-iss", p2, 9, { memberOf: ["transversospinalis"] }),
  record("multifidus", "多裂肌", "Multifidus", "mul-TIF-ih-dus", p2, 9, { memberOf: ["transversospinalis"] }),
  record("rotatores", "回旋肌", "Rotatores", "roh-tah-TOR-eez", p2, 9, { memberOf: ["transversospinalis"] }),
  record("splenius-capitis", "头夹肌", "Splenius capitis", "SPLEE-nee-us KAP-ih-tis", p2, 10),
  record("splenius-cervicis", "颈夹肌", "Splenius cervicis", "SPLEE-nee-us SUR-vih-sis", p2, 10),

  record("iliopsoas", "髂腰肌", "Iliopsoas", "ill-ee-oh-SOH-us", p3, 1, { recordType: "muscle_group", members: ["iliacus", "psoas-major", "psoas-minor"] }),
  record("iliacus", "髂肌", "Iliacus", "ill-ee-AK-us", p3, 1, { memberOf: ["iliopsoas"] }),
  record("psoas-major", "腰大肌", "Psoas major", "SOH-us MAY-jer", p3, 1, { memberOf: ["iliopsoas"] }),
  record("psoas-minor", "腰小肌", "Psoas minor", "SOH-us MY-nor", p3, 1, { memberOf: ["iliopsoas"] }),
  record("deep-hip-external-rotators", "髋关节外旋肌", "Deep external rotators of the hip", "deep external rotators of the hip", p3, 2, { recordType: "muscle_group", members: ["piriformis", "superior-gemellus", "obturator-internus", "inferior-gemellus", "quadratus-femoris", "obturator-externus"] }),
  record("piriformis", "梨状肌", "Piriformis", "peer-ih-FOR-mis", p3, 2, { memberOf: ["deep-hip-external-rotators"] }),
  record("superior-gemellus", "上孖肌", "Superior gemellus", "soo-PEER-ee-or juh-MEL-us", p3, 2, { memberOf: ["deep-hip-external-rotators"] }),
  record("obturator-internus", "闭孔内肌", "Obturator internus", "OB-tyoo-ray-ter in-TER-nus", p3, 2, { memberOf: ["deep-hip-external-rotators"] }),
  record("inferior-gemellus", "下孖肌", "Inferior gemellus", "in-FEER-ee-or juh-MEL-us", p3, 2, { memberOf: ["deep-hip-external-rotators"] }),
  record("quadratus-femoris", "股方肌", "Quadratus femoris", "kwah-DRAY-tus FEM-or-iss", p3, 2, { memberOf: ["deep-hip-external-rotators"] }),
  record("obturator-externus", "闭孔外肌", "Obturator externus", "OB-tyoo-ray-ter ek-STER-nus", p3, 2, { memberOf: ["deep-hip-external-rotators"] }),
  record("gluteus-maximus", "臀大肌", "Gluteus maximus", "GLOO-tee-us MAK-sih-mus", p3, 3),
  record("gluteus-medius", "臀中肌", "Gluteus medius", "GLOO-tee-us MEE-dee-us", p3, 3),
  record("gluteus-minimus", "臀小肌", "Gluteus minimus", "GLOO-tee-us MIN-ih-mus", p3, 4),
  record("sartorius", "缝匠肌", "Sartorius", "sar-TOR-ee-us", p3, 5),
  record("quadriceps-femoris", "股四头肌", "Quadriceps femoris", "KWOD-rih-seps FEM-or-iss", p3, 6, { recordType: "muscle_group", members: ["rectus-femoris", "vastus-lateralis", "vastus-medialis", "vastus-intermedius"] }),
  record("rectus-femoris", "股直肌", "Rectus femoris", "REK-tus FEM-or-iss", p3, 6, { memberOf: ["quadriceps-femoris"] }),
  record("vastus-lateralis", "股外侧肌", "Vastus lateralis", "VAS-tus lat-er-AL-iss", p3, 6, { memberOf: ["quadriceps-femoris"] }),
  record("vastus-medialis", "股内侧肌", "Vastus medialis", "VAS-tus mee-dee-AL-iss", p3, 6, { memberOf: ["quadriceps-femoris"] }),
  record("vastus-intermedius", "股中间肌", "Vastus intermedius", "VAS-tus in-ter-MEE-dee-us", p3, 6, { memberOf: ["quadriceps-femoris"] }),
  record("pectineus", "耻骨肌", "Pectineus", "pek-TIN-ee-us", p3, 7),
  record("adductor-longus", "长收肌", "Adductor longus", "uh-DUK-ter LONG-gus", p3, 7),
  record("adductor-brevis", "短收肌", "Adductor brevis", "uh-DUK-ter BREV-iss", p3, 7),
  record("adductor-magnus", "大收肌", "Adductor magnus", "uh-DUK-ter MAG-nus", p3, 7),
  record("gracilis", "股薄肌", "Gracilis", "GRASS-ih-lis", p3, 7),
  record("tensor-fasciae-latae", "阔筋膜张肌", "Tensor fasciae latae", "TEN-ser FASH-ee-ee LAT-ee", p3, 8),
  record("hamstrings", "腘绳肌", "Hamstring muscles", "HAM-string muscles", p3, 9, { recordType: "muscle_group", members: ["biceps-femoris", "semitendinosus", "semimembranosus"] }),
  record("biceps-femoris", "股二头肌", "Biceps femoris", "BY-seps FEM-or-iss", p3, 9, { memberOf: ["hamstrings"] }),
  record("semitendinosus", "半腱肌", "Semitendinosus", "sem-ee-ten-dih-NOH-sus", p3, 9, { memberOf: ["hamstrings"] }),
  record("semimembranosus", "半膜肌", "Semimembranosus", "sem-ee-mem-bruh-NOH-sus", p3, 9, { memberOf: ["hamstrings"] }),
  record("popliteus", "腘肌", "Popliteus", "pop-LIT-ee-us", p3, 11),
  record("plantaris", "跖肌", "Plantaris", "plan-TAIR-iss", p3, 12),
  record("posterior-calf-group", "腓肠肌和比目鱼肌", "Gastrocnemius and soleus", "gas-trok-NEE-mee-us and SOH-lee-us", p3, 13, { recordType: "muscle_group", members: ["gastrocnemius", "soleus"] }),
  record("gastrocnemius", "腓肠肌", "Gastrocnemius", "gas-trok-NEE-mee-us", p3, 13, { memberOf: ["posterior-calf-group"] }),
  record("soleus", "比目鱼肌", "Soleus", "SOH-lee-us", p3, 13, { memberOf: ["posterior-calf-group"] }),
  record("ankle-foot-extensors", "踝和足的伸肌", "Extensors of the ankle and toes", "extensors of the ankle and toes", p3, 14, { recordType: "muscle_group", members: ["tibialis-anterior", "extensor-digitorum-longus", "extensor-hallucis-longus"] }),
  record("tibialis-anterior", "胫骨前肌", "Tibialis anterior", "tib-ee-AL-iss an-TEER-ee-or", p3, 14, { memberOf: ["ankle-foot-extensors"] }),
  record("extensor-digitorum-longus", "趾长伸肌", "Extensor digitorum longus", "ek-STEN-ser dij-ih-TOR-um LONG-gus", p3, 14, { memberOf: ["ankle-foot-extensors"] }),
  record("extensor-hallucis-longus", "𧿹长伸肌", "Extensor hallucis longus", "ek-STEN-ser HAL-yoo-sis LONG-gus", p3, 14, { memberOf: ["ankle-foot-extensors"], confidence: "low" })
];

const transcribed = (textZh, options = {}) => ({
  textZh,
  status: options.status || "present",
  confidence: options.confidence || "high",
  reviewStatus: options.reviewStatus || "reviewed",
  reviewNote: options.reviewNote || null
});

const pilotUpdates = {
  "trapezius": {
    origin: transcribed("枕骨上项线；第7颈椎棘突至第12胸椎棘突", {
      status: "partial", confidence: "medium", reviewStatus: "needs_review",
      reviewNote: "根据本页图示标签转录；起点范围需与正式字段页核对"
    }),
    insertion: transcribed(null, {
      status: "missing", confidence: "low", reviewStatus: "needs_review",
      reviewNote: "本页图示标出止点位置，但未见可可靠转录的文字字段"
    }),
    action: transcribed("上部和下部肌束分别在上提和下降肩胛骨时是拮抗肌。", {
      status: "partial", confidence: "high", reviewStatus: "needs_review",
      reviewNote: "本页只明确叙述了这部分功能，未见完整功能字段"
    }),
    innervation: transcribed(null, {
      status: "missing", confidence: "low", reviewStatus: "needs_review",
      reviewNote: "本页未见神经分布字段"
    })
  },
  "levator-scapulae": {
    origin: transcribed("第1颈椎至第4颈椎横突"),
    insertion: transcribed(null, {
      status: "missing", confidence: "low", reviewStatus: "needs_review",
      reviewNote: "图示可见附着区域，但本页未见可可靠转录的止点文字字段"
    }),
    action: transcribed(null, {
      status: "missing", confidence: "low", reviewStatus: "needs_review",
      reviewNote: "本页未见独立功能字段"
    }),
    innervation: transcribed(null, {
      status: "missing", confidence: "low", reviewStatus: "needs_review",
      reviewNote: "本页未见可明确归属于肩胛提肌的神经分布字段"
    })
  },
  "serratus-anterior": {
    action: transcribed("前锯肌起点固定：\n外展肩胛骨（肩胛胸廓关节）\n向上旋转肩胛骨（肩胛胸廓关节）\n下降肩胛骨（肩胛胸廓关节）\n限制肩胛骨内侧缘\n肩胛骨固定：深吸气时提升胸腔"),
    origin: transcribed("上8或9肋骨外侧面"),
    insertion: transcribed("肩胛骨内侧缘前面"),
    innervation: transcribed("胸长神经，C5～8")
  },
  "external-oblique": {
    action: transcribed("单侧：向同侧侧屈脊柱\n向对侧旋转脊柱\n双侧：前屈脊柱\n压缩腹腔内容物"),
    origin: transcribed("第5～12肋外表面"),
    insertion: transcribed("髂嵴前部\n腹部腱膜直到白线"),
    innervation: transcribed("T5～6，T7～11，T12")
  },
  "quadratus-lumborum": {
    action: transcribed("单侧：侧方倾斜（提举）骨盆\n将脊柱弯向同侧\n协助后伸脊柱\n双侧：被动呼吸时固定最后肋"),
    origin: transcribed("髂后嵴"),
    insertion: transcribed("第12肋和第1～4腰椎横突"),
    innervation: transcribed("腰丛 T12，L1～3")
  },
  "rectus-abdominis": {
    action: transcribed("前屈脊柱\n后倾骨盆"),
    origin: transcribed("耻骨嵴，耻骨联合"),
    insertion: transcribed("第5～7肋软骨和剑突"),
    innervation: transcribed("T5～6，T7～11，T12前支")
  },
  "gluteus-medius": {
    action: transcribed("所有肌束：外展髋关节\n前部肌束：屈曲髋关节\n内旋髋关节\n后部肌束：外展髋关节\n外旋髋关节"),
    origin: transcribed("位于髂嵴下方，前后臀线间的髂骨臀面"),
    insertion: transcribed("大转子外侧"),
    innervation: transcribed("臀上神经 L4～5，S1")
  },
  "sartorius": {
    action: transcribed("屈曲髋关节\n外旋髋关节\n外展髋关节\n屈曲膝关节\n内旋已屈曲的膝关节"),
    origin: transcribed("髂前上棘"),
    insertion: transcribed("胫骨近端内侧鹅足腱"),
    innervation: transcribed("股神经，L2～4")
  },
  "vastus-intermedius": {
    action: transcribed("股四头肌：屈曲膝关节"),
    origin: transcribed("股中间肌：股骨体的前外侧"),
    insertion: transcribed("胫骨粗隆（通过髌骨和髌韧带）"),
    innervation: transcribed("股神经，L2～4")
  },
  "popliteus": {
    action: transcribed("向内旋转屈曲的膝关节（胫股关节）\n屈曲膝关节（胫股关节）"),
    origin: transcribed("股骨外侧髁"),
    insertion: transcribed("胫骨近端后部"),
    innervation: transcribed("胫神经，L4～5，S1")
  }
};

for (const [id, fields] of Object.entries(pilotUpdates)) {
  const target = remainingMuscles.find(item => item.id === id);
  Object.assign(target, fields);
  target.source.transcriptionStatus = "pilot_visually_transcribed";
  target.source.reviewStatus = Object.values(fields).some(field => field.reviewStatus === "needs_review")
    ? "field_review_required"
    : "reviewed";
  target.source.confidence = target.source.reviewStatus === "reviewed" ? "high" : "medium";
}
