export const details = [{
  title: '[A]极恶技·断(五段)总伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害']+talent.a['二段伤害']+talent.a['三段伤害']+talent.a['四段伤害']+talent.a['五段伤害'], 'a')
}, {
  title: '[A+]极恶技·断重击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a')
}, {
  title: '[A+]极恶技·断下落期间伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['下坠期间伤害'], 'a')
}, {
  title: '[A+]高空坠地冲击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][1], 'a')
}, {
  title: '[E]极恶技·闪(五段)总伤害(七相一闪)',
  params: { seven_phase: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['一段伤害']+talent.e['二段伤害']+talent.e['三段伤害']+talent.e['四段伤害']+talent.e['五段伤害'], 'e')
}, {
  title: '[E+]极恶技·闪重击伤害(七相一闪)',
  params: { seven_phase: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['重击伤害'], 'e')
}, {
  title: '[Q]极恶技·灭(五段+最终一击)伤害',
  params: { snake_cunning: 50 },
  dmg: ({ talent }, dmg) => {
    const qDmg = dmg(talent.q['技能伤害'], 'q')
    const finalDmg = dmg(talent.q['最终一击技能伤害'], 'q')
    return {
      dmg: qDmg.dmg + finalDmg.dmg,
      avg: qDmg.avg + finalDmg.avg
    }
  }
}, {
  title: '[Q]极恶技·灭总伤害(满蛇之狡谋)',
  params: { snake_cunning: 62 },
  dmg: ({ talent }, dmg) => {
    const qDmg = dmg(talent.q['技能伤害'], 'q')
    const finalDmg = dmg(talent.q['最终一击技能伤害'], 'q')
    return {
      dmg: qDmg.dmg + finalDmg.dmg,
      avg: qDmg.avg + finalDmg.avg
    }
  }
},{
  title: '[Q+]极恶技·尽总伤害(满蛇之狡谋)',
  params: { snake_cunning: 62, seven_phase: true, xujing: true },
  dmg: ({ talent }, dmg) => {
    const qDmg = dmg(talent.q['技能伤害'], 'q')
    const finalDmg = dmg(talent.q['最终一击技能伤害'], 'q')
    return {
      dmg: qDmg.dmg + finalDmg.dmg,
      avg: qDmg.avg + finalDmg.avg
    }
  }
}]

export const defParams = { death_river: 3 }
export const defDmgIdx = 8
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '丝柯克天赋：队伍中附近的元素类型为水元素的角色造成水元素伤害时，或是队伍中附近的元素类型为冰元素的其他角色造成冰元素伤害时，获得死河渡断效果',
  data: {
    aDmg: 70,
    qDmg: 60
  }
}, {
  check: ({ params }) => params.seven_phase === true,
  title: '丝柯克2命：处于七相一闪模式下时，普通攻击造成的伤害提升60%',
  cons: 2,
  data: {
    qDmg: 60
  }
}, {
  check: ({ params }) => params.xujing === true,
  title: '丝柯克元素爆发：施放极恶技·尽时，汲取了虚境裂隙，则会依据汲取的虚境裂隙枚数，使本次普通攻击造成的伤害进一步提高',
  data: {
    qDmg: ({ talent }) => talent.q['汲取0/1/2/3枚虚境裂隙伤害提升'][3]
  }
}, {
  title: '丝柯克2命：元素爆发极恶技·灭依据蛇之狡谋提升伤害时，至多额外计入12点蛇之狡谋',
  cons: 2,
  data: {
    qPlus: ({ talent, params }) => params.snake_cunning >= 50 ? talent.q['蛇之狡谋加成'] * 12 : 0
  }
}, {
  check: ({ params }) => params.snake_cunning > 50,
  title: '丝柯克元素爆发：依据施放时丝柯克拥有的蛇之狡谋超过50点的部分，每1点蛇之狡谋都将提升本次元素爆发造成的伤害',
  data: {
    qPlus: ({ talent, params }) => params.snake_cunning > 50 ? talent.q['蛇之狡谋加成'] * 12 : 0
  }
}, {
  title: '丝柯克4命：死河渡断效果会使丝柯克的攻击力提升[atkPct]%',
  cons: 4,
  data: {
    atkPct: 50
  }
}]

export const createdBy = 'YuapXc'
