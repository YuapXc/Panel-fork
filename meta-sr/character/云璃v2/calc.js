export const details = [{
  title: '触发特效后生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后速度',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后击破特攻',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '当前遗器套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[E]飞铗震赫-主目标伤害',
  params: { team: false,teamA: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
},{
  title: '[E]飞铗震赫-相邻目标伤害',
  params: { team: false,teamA: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
},{
  title: '[T]闪铄-主目标伤害',
  params: { team: false,teamA: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.t['主目标伤害'], 't')
},{
  title: '[T]闪铄-相邻目标伤害',
  params: { team: false,teamA: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.t['相邻目标伤害'], 't')
},{
  title: '[Q]勘破•斩-主目标伤害',
  params: { team: false,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['【勘破•斩】主目标伤害'], 't')
},{
  title: '[Q]勘破•斩-相邻目标伤害',
  params: { team: false,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['【勘破•斩】相邻目标伤害'], 't')
},{
  title: '[Q]勘破•灭-主目标伤害',
  params: { team: false,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['【勘破•灭】主目标伤害'], 't')
},{
  title: '[Q]勘破•灭-相邻目标伤害',
  params: { team: false,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['【勘破•灭】相邻目标伤害'], 't')
},{
  title: '[Q]单段弹射伤害',
  params: { team: false,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['随机弹射伤害'], 'q')
},{
  check: ({ cons }) => cons < 1,
  title: '[Q]弹射总伤害',
  dmgKey: 'AE',
  params: { team: false,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['随机弹射伤害'] * 6, 'q')
},{
  check: ({ cons }) => cons > 0,
  title: '[Q]弹射总伤害',
  dmgKey: 'AE',
  params: { team: false,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['随机弹射伤害'] * 9, 'q')
},{
  title: '[云鸟停藿-E]飞铗震赫-主目标伤害',
  params: { team: true,teamA: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['主目标伤害'], 'e')
},{
  title: '[云鸟停藿-E]飞铗震赫-相邻目标伤害',
  params: { team: true,teamA: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
},{
  title: '[云鸟停藿-T]闪铄-主目标伤害',
  params: { team: true,teamA: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.t['主目标伤害'], 't')
},{
  title: '[云鸟停藿-T]闪铄-相邻目标伤害',
  params: { team: true,teamA: false,Q: false },
  dmg: ({ talent }, dmg) => dmg(talent.t['相邻目标伤害'], 't')
},{
  title: '[云鸟停藿-Q]勘破•斩-主目标伤害',
  params: { team: true,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['【勘破•斩】主目标伤害'], 't')
},{
  title: '[云鸟停藿-Q]勘破•斩-相邻目标伤害',
  params: { team: true,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['【勘破•斩】相邻目标伤害'], 't')
},{
  title: '[云鸟停藿-Q]勘破•灭-主目标伤害',
  params: { team: true,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['【勘破•灭】主目标伤害'], 't')
},{
  title: '[云鸟停藿-Q]勘破•灭-相邻目标伤害',
  params: { team: true,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['【勘破•灭】相邻目标伤害'], 't')
},{
  title: '[云鸟停藿-Q]单段弹射伤害',
  params: { team: true,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['随机弹射伤害'], 'q')
},{
  check: ({ cons }) => cons < 1,
  title: '[云鸟停藿-Q]弹射总伤害',
  params: { team: true,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['随机弹射伤害'] * 6, 'q')
},{
  check: ({ cons }) => cons > 0,
  title: '[云鸟停藿-Q]弹射总伤害',
  params: { team: true,teamA: false,Q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['随机弹射伤害'] * 9, 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'hp,atk,cpct,cdmg,speed'

export const buffs = [{
  check: ({ params }) => params.Q === true,
  title: '格挡：云璃造成的暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ talent }) => talent.q['暴击伤害提高'] * 100
  }
}, {
  title: '真刚：云璃的攻击力提高30%',
  data: {
    atkPct: 30
  }
}, {
  title: '1命：【勘破•斩】与【勘破•灭】造成的伤害提高20%，【勘破•灭】的额外伤害段数增加3次。',
  cons: 1,
  data: {
    qdmg: 20
  }
}, {
  title: '2命：云璃在回合结束后使自身暴击率提高18%，持续到下一回合开始前。',
  cons: 2,
  data: {
    qcpct: 18
  }
}, {
  check: ({ params }) => params.Q === true,
  title: '4命：云璃发动反击造成伤害时无视敌方目标20%的防御力。',
  cons: 4,
  data: {
    ignore: 40
  }
},{
  check: ({ cons, params }) => params.team === true,
  title: '藿藿 遣神役鬼：攻击力提升[atkPct]%',
  data: {
    atkPct: 40
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '藿藿 惊魂夜¹：攻击力提升[atkPct]%',
  data: {
    atkPct: 12
  }
},{
  check: ({ cons, params }) => params.team === true,
  title: '藿藿 龙骨套：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 10
  }
},{
  check: ({ cons, params }) =>  params.team === true,
  title: '停云 祥音和韵：攻击力提升[atkPct]%',
  data: {
    atkPct: 25
  }
}, {
  check: ({ cons, params }) =>  params.team === true,
  title: '停云 云光覆仪祷：造成的伤害提升[dmg]%',
  data: {
    dmg: 50
  }
}, {
  check: ({ cons, params }) =>  params.team === true,
  title: '停云光锥 镂月裁云之意⁵：暴击伤害提升[cdmg]%',
  data: {
    cdmg: 24
  }
},{
  check: ({ cons, params }) =>  params.team === true,
  title: '知更鸟：造成的伤害提升[dmg]%,暴击伤害提升[cdmg]%,追加暴击伤害提升[tcdmg]%',
  data: {
    dmg: 50,
    cdmg: 20,
    tcdmg: 25
  }
},{
  check: ({ cons, params }) =>  params.team === true,
  title: '知更鸟：攻击提升[atkPlus]点,知更鸟专武,匹诺康尼提升伤害[dmg]%',
  data: {
    atkPlus: 1400,
    dmg: 34
  }
}]

export const createdBy = 'Ehya丶Calc'
