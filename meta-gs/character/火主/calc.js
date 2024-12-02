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
  title: '触发特效后元素精通',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
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
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  check: ({ cons }) => cons >= 6,
  title: '[A]普攻一段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A]普攻二段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['二段伤害'], 'a')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A]普攻三段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['三段伤害'], 'a')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A]普攻四段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['四段伤害'], 'a')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A]普攻五段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['五段伤害'], 'a')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A+]普攻重击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
},{
  title: '[E]焰烈之槛伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['焰烈之槛伤害'], 'e')
},{
  title: '[E]长按伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['长按伤害'], 'e')
},{
  title: '[E]灼火之槛伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['灼火之槛伤害'], 'e')
},{
  title: '[Q]厝火燎原伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A]普攻一段蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a','vaporize')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A]普攻二段蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['二段伤害'], 'a','vaporize')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A]普攻三段蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['三段伤害'], 'a','vaporize')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A]普攻四段蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['四段伤害'], 'a','vaporize')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A]普攻五段蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['五段伤害'], 'a','vaporize')
},{
  check: ({ cons }) => cons >= 6,
  title: '[A+]普攻重击蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2','vaporize')
},{
  title: '[E]焰烈之槛蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['焰烈之槛伤害'], 'e','vaporize')
},{
  title: '[E]长按蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['长按伤害'], 'e','vaporize')
},{
  title: '[E]灼火之槛蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['灼火之槛伤害'], 'e','vaporize')
},{
  title: '[Q]厝火燎原蒸发伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q','vaporize')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,hp,cpct,cdmg'

export const buffs = [{
  title: '4命：获得20%火元素伤害加成',
  cons: 4,
  data: {
    dmg: 20
  }
},{
  title: '6命：普通攻击、重击与下落攻击暴击伤害提升40%。并触发1命场上角色，伤害提升12%',
  cons: 4,
  data: {
    aCdmg: 40,
    a2Cdmg: 40,
    a3Cdmg: 40,
    aDmg: 12,
    a2Dmg: 12,
    a3Dmg: 12
  }
}]
