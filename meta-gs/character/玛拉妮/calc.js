export const details = [{
  title: '触发特效后生命值',
  params: {teamA:false, A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '[双水]触发特效后生命值',
  params: {teamA:false, A: false,B: false,C: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
},{
  title: '触发特效后攻击力',
  params: {teamA:false, A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: {teamA:false, A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: {teamA:false, A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: {teamA:false, A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  params: {teamA:false, A: false,B: false,C: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: {teamA:false, A: false,B: false,C: false },
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
  title: '[A]0层·鲨鲨撕咬伤害',
  params: {teamA:false, A: false,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['鲨鲨撕咬基础伤害'] * calc(attr.hp) / 100, 'a')
}, {
  title: '[A]1层·鲨鲨撕咬伤害',
  params: {teamA:false, A: true,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['鲨鲨撕咬基础伤害'] * calc(attr.hp) / 100, 'a')
}, {
  title: '[A]2层·鲨鲨撕咬伤害',
  params: {teamA:false, A: false,B: true,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['鲨鲨撕咬基础伤害'] * calc(attr.hp) / 100, 'a')
}, {
  title: '[A]巨浪鲨鲨撕咬伤害',
  dmg: ({ talent, attr, calc }, { basic }) => basic((talent.e['鲨鲨撕咬基础伤害'] + talent.e['巨浪鲨鲨撕咬伤害额外提升'] )* calc(attr.hp) / 100, 'a')
},{
  title: '[Q]爆瀑飞弹伤害',
  dmg: ({ talent, attr, calc }, { basic }) => basic((talent.q['技能伤害'] )* calc(attr.hp) / 100, 'q')
},{
  title: '[蒸发-A]0层·鲨鲨撕咬伤害',
  params: {teamA:false, A: false,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['鲨鲨撕咬基础伤害'] * calc(attr.hp) / 100, 'a', 'vaporize')
}, {
  title: '[蒸发-A]1层·鲨鲨撕咬伤害',
  params: {teamA:false, A: true,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['鲨鲨撕咬基础伤害'] * calc(attr.hp) / 100, 'a', 'vaporize')
}, {
  title: '[蒸发-A]2层·鲨鲨撕咬伤害',
  params: {teamA:false, A: false,B: true,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['鲨鲨撕咬基础伤害'] * calc(attr.hp) / 100, 'a', 'vaporize')
}, {
  title: '[蒸发-A]巨浪鲨鲨撕咬伤害',
  dmgKey: 'AE',
  dmg: ({ talent, attr, calc }, { basic }) => basic((talent.e['鲨鲨撕咬基础伤害'] + talent.e['巨浪鲨鲨撕咬伤害额外提升'] )* calc(attr.hp) / 100, 'a', 'vaporize')
},{
  title: '[蒸发-Q]爆瀑飞弹伤害',
  dmg: ({ talent, attr, calc }, { basic }) => basic((talent.q['技能伤害'] )* calc(attr.hp) / 100, 'q', 'vaporize')
},{
  title: '[玛香万芙-蒸发-A]0层·鲨鲨撕咬伤害',
  params: {teamA:true, A: false,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['鲨鲨撕咬基础伤害'] * calc(attr.hp) / 100, 'a', 'vaporize')
}, {
  title: '[玛香万芙-蒸发-A]1层·鲨鲨撕咬伤害',
  params: {teamA:true, A: true,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['鲨鲨撕咬基础伤害'] * calc(attr.hp) / 100, 'a', 'vaporize')
}, {
  title: '[玛香万芙-蒸发-A]2层·鲨鲨撕咬伤害',
  params: {teamA:true, A: false,B: true,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['鲨鲨撕咬基础伤害'] * calc(attr.hp) / 100, 'a', 'vaporize')
}, {
  title: '[玛香万芙-蒸发-A]巨浪鲨鲨撕咬伤害',
  params: {teamA:true, A: false,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic((talent.e['鲨鲨撕咬基础伤害'] + talent.e['巨浪鲨鲨撕咬伤害额外提升'] )* calc(attr.hp) / 100, 'a', 'vaporize')
},{
  title: '[玛香万芙-蒸发-Q]爆瀑飞弹伤害',
  params: {teamA:true, A: false,B: false,C: false },
  dmg: ({ talent, attr, calc }, { basic }) => basic((talent.q['技能伤害'] )* calc(attr.hp) / 100, 'q', 'vaporize')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'hp,dmg,cpct,cdmg'

export const buffs = [{
  title: '枫原万叶圣遗物：[翠绿之影4] 根据扩散的元素类型，降低受到影响的敌人[kx]%的对应元素抗性',
  check: ({ params }) => params.teamA === true,
  data: {
    kx: 40
  }
},
{
  title: '枫原万叶武器：[苍古自由之誓-精1] 消耗所有奋起之符使附近队伍中所有角色获得[aDmg]%普通攻击,重击,下落攻击伤害提升和[atkPct]%攻击力',
  check: ({ params , cons }) => (cons < 6 && cons > 1) && params.teamA === true,
  sort: 1,
  data: {
    atkPct: 20,
    aDmg: 16,
    a2Dmg: 16,
    a3Dmg: 16
  }
},
{
  title: '枫原万叶武器：[苍古自由之誓-精5] 消耗所有奋起之符使附近队伍中所有角色获得[aDmg]%普通攻击,重击,下落攻击伤害提升和[atkPct]%攻击力',
  check: ({ params , cons }) => cons >= 6 && params.teamA === true,
  sort: 1,
  data: {
    atkPct: 40,
    aDmg: 32,
    a2Dmg: 32,
    a3Dmg: 32
  }
},
{
  title: '枫原万叶2命：[山岚残芯] 万叶之一刀的流风秋野其中的场上角色的元素精通提升[mastery]点',
  check: ({ params , cons }) => cons >= 2 && params.teamA === true,
  sort: 1,
  data: {
    mastery: 200
  }
}, {
  check: ({ params , cons }) => ( cons < 1 ) && params.teamA === true ,
  title: '0命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 52.5
  }
}, {
  check: ({ params , cons }) => ( ( cons < 2 && cons >= 1 ) && params.teamA === true ) ,
  title: '1命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 70
  }
}, {
  check: ({ params , cons }) => ( cons >= 2 && params.teamA === true ) ,
  title: '2命芙宁娜：获得[dmg]%增伤',
  data: {
    dmg: 100
  }
},{
  title: '元素共鸣：[愈疗之水] 生命值上限提升[hpPct]%',
  check: ({ params }) => params.teamA === true,
  data: {
    hpPct: 25
  }
},{
  check: ({ params }) => params.A === true,
  title: '浪势充能伤害提升：鲨鲨撕咬伤害提高[aPlus]%',
  data: {
    aPlus: ({ talent,attr, calc}) => talent.e['浪势充能伤害提升'] * calc(attr.hp) * 0.01
  }
},{
  check: ({ params }) => params.B === true,
  title: '浪势充能伤害提升：鲨鲨撕咬伤害提高[aPlus]%',
  data: {
    aPlus: ({ talent,attr, calc }) => talent.e['浪势充能伤害提升'] * calc(attr.hp) * 2 *0.01
  }
},
{
  title: '元素共鸣：[愈疗之水] 生命值上限提升[hpPct]%',
  check: ({ params }) => params.C === true,
  data: {
    hpPct: 25
  }
},{
  title: '纳塔最好的向导：爆瀑飞弹造成的伤害提升[qPlus]点',
  data: {
    qPlus: ({ calc, attr }) => calc(attr.hp) * 0.45
  }
},{
  check: ({ params , cons }) => cons > 3,
  title: '4命：爆瀑飞弹造成的伤害提升75%。',
  data: {
    dmg: 75
  }
},{
  check: ({ params , cons }) => cons > 5,
  title: '6命：普攻伤害提升[aPlus]点。',
  data: {
    aPlus: ({ calc, attr }) => calc(attr.hp) * 0.66
  }
}]

export const createdBy = 'Ehya_Bot'
