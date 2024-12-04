export default function (staticIdx, keyIdx) {
  return {
    溯忆: [
      keyIdx('造成的伤害提高[Dmg]%', 'Dmg', 2)
    ],
    焚影: [],
    '多流汗，少流泪': [
      staticIdx(1, 'cdmg'),
      keyIdx('造成的伤害提高[Dmg]%', 'Dmg', 2)
    ],
    天才们的问候: [
      staticIdx(1, 'atkPct'),
      keyIdx('攻击力额外提高[atkPct]%', 'atkPct', 2)
    ],
    胜利只在朝夕间: [
      staticIdx(1, 'cpct'),
      keyIdx('造成的伤害提高[Dmg]%', 'Dmg', 2)
    ],
    将光阴织成黄金: [
      staticIdx(1, 'speed'),
      keyIdx('使暴击伤害提高[cdmg]%', 'cdmg', 3),
      keyIdx('普攻造成的伤害提高[aDmg]%', 'aDmg', 5)
    ]
  }
}
