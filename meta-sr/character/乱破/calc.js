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
  title: '[A]忍术•七转八起伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[结印状态]一段主目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['主目标伤害'], 'q')
}, {
  title: '[结印状态]一段相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['相邻目标伤害'], 'q')
}, {
  title: '[结印状态]二段主目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['主目标伤害'], 'q')
}, {
  title: '[结印状态]二段相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['相邻目标伤害'], 'q')
}, {
  title: '[结印状态]三段主目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['全体伤害'], 'q')
}, {
  title: '[结印状态]三段高爆弹伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['高爆弹额外伤害'], 'q')
}, {
  title: '[E]忍切•初志贯彻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '乱破击破伤害暂不提供计算',
  dmg: ({ artis , attr, calc, talent, weapon }) => {
    return {
      avg: weapon.name ,
      type: 'text'
    }
  }
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '1命：无视目标15%的防御。',
  cons: 1,
  data: {
    ignore: 15
  }
},{
  title: '4命：我方全体速度提高12%。',
  cons: 4,
  data: {
    speedPct: 12
  }
},{
  check: ({ calc, attr }) => calc(attr.atk) > 2000 ,
  title: '忍法帖•枯叶：敌方目标受到的击破伤害提高[breakEnemydmg]%',
  data: {
    breakEnemydmg: ({ calc, attr }) => Math.min(12, (calc(attr.atk) - 2000 ) / 100)
  }
},{
  title: '结印状态：击破特攻提高[stance]%',
  data: {
    stance: ({ talent }) => talent.q['击破特攻提高'] * 100
  }
}]

export const createdBy = 'Ehya丶Calc'
