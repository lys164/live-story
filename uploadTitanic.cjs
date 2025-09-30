// npm install firebase-admin

const admin = require('firebase-admin');
const serviceAccount = require('/Users/a0/Desktop/aiko/billionare-501bf-firebase-adminsdk-fbsvc-dd7efe7111.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// 你的 narrative_block 数据
const titanicData =
{
  "narrative_block": [
    {
      "sound_effects": ["ship_horn_long_deep.mp3", "seagulls_crying.mp3", "bustling_crowd_chatter_early_20th_century.mp3", "upbeat_ orchestral_music.mp3"],
      "background_image": "https://pub-2f9f2bb31dfe4cc7acd099657c4c879f.r2.dev/2%20(1).jpeg",
      "visual_effects": ["epic-panoramic-shot", "lens-flare-sun", "text-overlay: '英国 南安普顿港 1912年4月10日'"],
      "dialogues": [
        {
          "speaker": "旁白",
          "text": "公元1912年，大西洋的另一端。工业革命的奇迹——泰坦尼克号，如同一座钢铁巨兽，静静地停靠在南安普顿港。一场跨越时代的荒诞旅行，即将鸣笛启航。"
        }
      ]
    },
    {
      "sound_effects": ["royal_fanfare_subtle.mp3", "respectful_hush_in_crowd.mp3"],
      "background_image": "https://pub-2f9f2bb31dfe4cc7acd099657c4c879f.r2.dev/3n%20(1).png",
      "visual_effects": ["slight-slow-motion", "focus-on-empress-bored-expression"],
      "dialogues": [
        {
          "speaker": "旁白",
          "text": "在万众瞩目下，皇上——这位来自东方的神秘商业大亨，携一众家眷登船。皇后娘娘身着繁复的西洋礼服，脸上却写满了'被迫营业'的疲惫。"
        },
        {
          "speaker": "皇后",
          "text": "（对剪秋小声抱怨）这裙子真是勒得慌...本宫乏了，什么时候能进去喝下午茶？"
        }
      ]
    },
    {
      "sound_effects": ["press_camera_flashes_intense.mp3", "upbeat_pop_music_intro.mp3", "excited_gasps.mp3"],
      "background_image": "https://pub-2f9f2bb31dfe4cc7acd099657c4c879f.r2.dev/4n%20(1).png",
      "visual_effects": ["spotlight-on-huafei", "instagram-live-overlay-effect", "sparkle-filter"],
      "dialogues": [
        {
          "speaker": "华妃",
          "text": "（仿佛自带BGM，对着并不存在的镜头挥手）宝宝们看过来！今天本宫这身look怎么样？一会儿的开船vlog，记得一键三连哦！"
        },
        {
          "speaker": "旁白",
          "text": "华妃完全把登船舷梯走成了戛纳红毯，成功吸引了全场的目光，除了……"
        }
      ]
    },
    {
      "sound_effects": ["awkward_silence.mp3", "nervous_stammering.mp3"],
      "background_image": "https://pub-2f9f2bb31dfe4cc7acd099657c4c879f.r2.dev/5n%20(1).png",
      "visual_effects": ["zoom-in-on-anlingrong-sweating", "text-bubble-overlay: 'KPI+1'"],
      "dialogues": [
        {
          "speaker": "旁白",
          "text": "在角落里，安陵容正抓着一位英国管家，对照着小抄，磕磕巴巴地练习着她的“职场技能”。"
        },
        {
          "speaker": "安陵容",
          "text": "Hello... May I... may I ask... where is the... library? My Key... Performance... Indicator... today is to learn ten new English words."
        }
      ]
    },
    {
      "sound_effects": ["awkward_silence.mp3", "nervous_stammering.mp3"],
      "background_image": "https://pub-2f9f2bb31dfe4cc7acd099657c4c879f.r2.dev/6n%20(1).png",
      "visual_effects": ["spotlight-on-huafei", "laugh-track-effect"],
      "dialogues": [
        {
          "speaker": "华妃",
          "text": "（恰好走过，发出一声嗤笑）哟，这不是安答应吗？怎么，还学上鸟语了？在本宫面前卖弄，你配吗？"
        }
      ],
      "audience_engagement_point": {
        "engagement_id": "engagement_001_first_clash",
        "engagement_type": "prediction_bet",
        "prompt_to_audience": "第一次正面交锋！你更看好谁的未来发展？",
        "options": [
          {
            "id": "support_huafei",
            "text": "顶流Drama Queen华妃 (气场碾压)"
          },
          {
            "id": "support_anlingrong",
            "text": "草根内卷王陵容 (潜力无限)"
          }
        ]
      }
    },
    {
      "sound_effects": ["calm_professional_voice.mp3", "record_scratch_sound_effect.mp3"],
      "background_image": "https://pub-2f9f2bb31dfe4cc7acd099657c4c879f.r2.dev/7%20(1).png",
      "visual_effects": ["overlay-text: '项目经理 甄嬛 已上线'", "split-screen-huafei-confused-vs-zhenhuan-calm"],
      "dialogues": [
        {
          "speaker": "旁白",
          "text": "就在安陵容手足无措之时，一个沉稳的声音介入了。只见甄嬛拿着一本笔记，竟像个项目经理在巡视工地。"
        },
        {
          "speaker": "甄嬛",
          "text": "华妃娘娘，安答应正在进行'跨文化交流培训'，这是我们'皇家邮轮项目'软实力建设的一部分。公开场合的团队内耗，不利于展现我们的企业文化，是项目管理的大忌。"
        }
      ],
      "decision_point": {
        "decision_id": "decision_zhenhuan_001",
        "character_id": "ZhenHuan",
        "prompt": "我成功地用“职场黑话”镇住了场面，但华妃显然已被激怒。主子，我下一步应该如何操作，来最大化本次“危机干预”的成果？",
        "options": [
          {
            "id": "option_A",
            "text": "A.【升级对抗】继续输出，公开点明华妃此举对团队KPI的负面影响，彻底树立自己“项目经理”的权威。"
          },
          {
            "id": "option_B",
            "text": "B.【记录在案】“好记性不如烂笔头”，当着华妃的面，在小本本上记下一笔，用无声的方式进行威慑。"
          },
          {
            "id": "option_C",
            "text": "C.【团队建设】不理会华妃，转向安陵容，温和地说：“别紧张，稍后我们开个1 on 1，复盘一下今天的沟通要点。”"
          }
        ]
      }
    },
    {
      "sound_effects": ["camera_shutter_sound.mp3", "pencil_sketching_on_paper.mp3"],
      "background_image": "https://pub-2f9f2bb31dfe4cc7acd099657c4c879f.r2.dev/8%20(1).png",
      "visual_effects": ["fade-to-sepia-tone", "close-up-on-sketchbook-drawing-of-huafei-and-zhenhuan"],
      "dialogues": [
        {
          "speaker": "旁白",
          "text": "远在三等舱拥挤的人潮中，一位年轻的画家——果郡王，正用速写记录下这荒诞而真实的一幕。他的画笔，刚刚捕捉到头等舱两位女性第一次交锋的瞬间。"
        }
      ]
    }
  ]
};

async function uploadToFirestore() {
  try {
    const docRef = db.collection('livestory').doc('泰坦尼克');
    await docRef.set(titanicData);
    console.log('上传成功！');
  } catch (error) {
    console.error('上传失败：', error);
  }
}

uploadToFirestore();


