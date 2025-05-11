export const details = [{
  title: '[A]西风剑术·祭仪(四段)总伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害']+talent.a['二段伤害']+talent.a['三段伤害']+talent.a['四段伤害'], 'a')
}, {
  title: '[A+]西风剑术·祭仪重击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a')
}, {
  title: '[A+]西风剑术·祭仪下落期间伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['下坠期间伤害'], 'a')
}, {
  title: '[A+]高空坠地冲击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][1], 'a')
}, {
  title: '[E]圣浸的礼典伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '[Q]纯耀的祷咏伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[Q]纯耀的祷咏护盾量',
  dmg: ({ talent, attr, cons, calc }, { shield }) => 
    shield((talent.q["圣眷护盾吸收量2"][0] / 100 + (cons > 0 ? 0.25 : 0)) * calc(attr.hp) + talent.q["圣眷护盾吸收量2"][1])
}]

export const defDmgIdx = 6
export const mainAttr = 'atk,cpct,cdmg,hp'

export const buffs = [{
  title: '2命：塔利雅消耗元素爆发纯耀的祷咏中的「祝颂」效果唤出圣眷护盾后，处于圣眷护盾庇护下的角色，护盾强效提升[shieldAdd]%，持续12秒',
  cons: 2,
  data: {
    shield: 25
  }
}]

export const createdBy = 'YuapXc'
