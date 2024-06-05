export const details = [{
  title: '触发特效后生命值',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '触发特效后治疗加成',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.heal) * 1)
    }
  }
},{
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[E]撷萃调香伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]柔灯之匣·一阶攻击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·一阶攻击伤害'], 'e')
},{
  title: '[E]柔灯之匣·二阶攻击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·二阶攻击伤害'], 'e')
},{
  title: '[Q]柔灯之匣·三阶攻击伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['柔灯之匣·三阶攻击伤害'], 'q')
},{
  title: '[T]清露香氛伤害',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 500 / 100, 't')
},{
  title: '燃烧每次伤害',
  dmg: ({}, { reaction }) => reaction('burning')
},{
  title: '[艾万班纳-E]撷萃调香伤害',
  params: { team: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[艾万班纳-E]柔灯之匣·一阶攻击伤害',
  params: { team: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·一阶攻击伤害'], 'e')
},{
  title: '[艾万班纳-E]柔灯之匣·二阶攻击伤害',
  params: { team: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['柔灯之匣·二阶攻击伤害'], 'e')
},{
  title: '[艾万班纳-Q]柔灯之匣·三阶攻击伤害',
  params: { team: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['柔灯之匣·三阶攻击伤害'], 'q')
},{
  title: '[艾万班纳-T]清露香氛伤害',
  params: { team: true },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 500 / 100, 't')
},{
  title: '[艾万班纳]燃烧每次伤害',
  params: { team: true },
  dmg: ({}, { reaction }) => reaction('burning')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,hp,cpct,cdmg,mastery'

export const buffs = [{
    check: ({ cons, params }) => cons <= 1 && params.team === true,
    title: '精1苍古0命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击,减抗[kx]%',
    sort: 9,
    data: {
      aDmg: 16,
      a2Dmg: 16,
      a3Dmg: 16,
      dmg: 40,
      atkPct: 20,
      kx: 40
    }
  }, {
    check: ({ cons, params }) => (cons < 6 && cons > 1 && params.team === true),
    title: '精1苍古2命万叶：获得[dmg]%增伤(苍古普攻16增伤)，增加[atkPct]%攻击,减抗[kx]%,精通[mastery]',
    sort: 9,
    data: {
      aDmg: 16,
      a2Dmg: 16,
      a3Dmg: 16,
      dmg: 48,
      atkPct: 20,
      kx: 40,
      mastery: 200
    }
  }, {
    check: ({ cons, params }) => (cons >= 6 && params.team === true),
    title: '精5苍古6命万叶：获得[dmg]%增伤(苍古普攻32增伤)，增加[atkPct]%攻击,减抗[kx]%,精通[mastery]',
    sort: 9,
    data: {
      aDmg: 32,
      a2Dmg: 32,
      a3Dmg: 32,
      dmg: 48,
      atkPct: 40,
      kx: 40,
      mastery: 200
    }
  },{
  check: ({ params }) => params.team === true,
  title: '风鹰宗室班：增加[atkPlus]点攻击力与[atkPct]%攻击力',
  sort: 9,
  data: {
    atkPct: 20,
    atkPlus: 1202.35
  }
},{
  check: ({ cons, params }) => (cons > 1 && params.team === true),
  title: '精1千夜2命4深林纳西妲：增加精通[mastery],减防[enemyDef]%',
  data: {
    mastery: 290,
    enemyDef: 30,
	kx: 0
  }
}, {
  check: ({ cons, params }) => (cons < 2 && params.team === true),
  title: '精1千夜0命4深林纳西妲：增加精通[mastery]',
  data: {
    mastery: 290,
	kx: 0
  }
},{
  title: '天赋：对燃烧状态下的敌人造成的伤害提升36%',
  data: {
    dmg: 36
  }
},{
  check: ({ params , cons }) => ( cons > 0 ),
  title: '1命：撷萃调香与固有天赋「余薰」的清露香氛造成的伤害提升10%',
  data: {
    edmg: 10,
    tdmg: 10
  }
},{
  check: ({ params , cons }) => ( cons > 1 ),
  title: '2命：攻击力提升36%',
  data: {
    atkPct: 39
  }
},'vaporize',
{title: '6.5最后修改：如有问题可联系3591754738反馈'}]