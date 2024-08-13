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
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.heal) * 1)
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
  title: '[E]识烟飞彩伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]识烟飞彩治疗量',
  dmg: ({ talent, attr }, { heal }) => heal(attr.atk * talent.e['回复值'] + talent.e['固定值'])
},{
  title: '[Q]矞帘淌霭， 幔亭缭霞伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  title: '[Q]矞帘淌霭， 幔亭缭霞治疗量',
  dmg: ({ talent, attr }, { heal }) => heal(attr.atk * talent.q['回复值'] + talent.q['固定值'])
},{
  title: '[T]烟斜雾横，氛氲化生伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 'q')
},{
  title: '[T]烟斜雾横，氛氲化生治疗量',
  dmgKey: 'AE',
  dmg: ({ talent, attr }, { heal }) => heal(attr.atk * talent.t['回复值'] + talent.t['固定值'])
}]

export const defDmgKey = 'AE'
export const mainAttr = 'hp,atk,cpct,cdmg,speed'

export const buffs = [{
  title: '朱燎：攻击力提升[atkPct]%,治疗量提高[heal]%',
  data: {
    atkPct: ({ attr }) => Math.min(50, attr.stance * 0.25),
    heal: ({ attr }) => Math.min(20, attr.stance * 0.1)
  }
},
{
  title: '1命：当有敌方单位的弱点被击破时，使其防御力降低20%。',
  cons: 1,
  data: {
    ignore: 20
 }
},
{
  title: '2命：我方全体击破特攻提高40%',
  cons: 2,
  data: {
    stance: 40
 }
},
{
  title: '6命：敌方全体全属性抗性降低20%',
  cons: 6,
  data: {
    kx: 20
 }
}]

export const createdBy = 'Ehya丶Calc'
