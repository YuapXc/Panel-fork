export default function (staticIdx, keyIdx) {
  return {
    溯忆: [(tables) => {
      return {
        title: '造成的伤害提高[dmg]%',
        data: {
          dmg: tables[1] * 4
        }
      }
    }],
    焚影: [],
    '多流汗，少流泪': [
      staticIdx(1, 'cpct'),
      keyIdx('造成的伤害提高[Dmg]%', 'Dmg', 2)
    ],
    天才们的问候: [
      staticIdx(1, 'atkPct'),
      keyIdx('普攻伤害提高[admg]%', 'admg', 2)
    ],
    胜利只在朝夕间: [
      staticIdx(1, 'cdmg'),
      keyIdx('造成的伤害提高[Dmg]%', 'Dmg', 2)
    ],
    将光阴织成黄金: [
      staticIdx(1, 'speed'),
      (tables) => {
        return {
          title: '暴击伤害提高[cdmg]%，普攻伤害提高[admg]%',
          data: {
            cdmg: tables[2] * 6,
            admg: tables[3] * 6
          }
        }
      }
    ],
    记忆永不落幕: [
      staticIdx(1, 'speedPct'),
      keyIdx('造成的伤害提高[Dmg]%', 'Dmg', 2)
    ],
    '让告别，更美一些': [
      staticIdx(1, 'hpPct'),
      keyIdx('无视目标防御力[ignore]%', 'ignore', 2)
    ],
    愿虹光永驻天空: [
      staticIdx(1, 'speedPct'),
      keyIdx('使敌方全体受到的伤害提高[enemydmg]%', 'enemydmg', 4)
    ],
    故事的下一页: [
      staticIdx(1, 'hpPct'),
      keyIdx('治疗量提高[heal]%', 'heal', 2)
    ],
    花儿不会忘记: [
      staticIdx(1, 'cdmg'),
      keyIdx('忆灵造成的暴击伤害额外提高[meCdmg]%', 'meCdmg', 2)
    ]
  }
}
