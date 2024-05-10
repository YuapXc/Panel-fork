export const details = [
{
  title: '触发特效后生命值',
  params: {team:false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: {team:false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: {team:false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: {team:false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: {team:false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  params: {team:false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: {team:false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '触发特效后治疗加成',
  params: {team:false},
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.heal) * 1)
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
  title: `[E]弹跳结束治疗量`,
  dmg: ({ cons,talent, attr, calc }, { heal }) => heal(calc(attr.hp) * 0.5 )
},{
  title: `[E]激愈水球治疗量`,
  dmgKey: 'AE',
  dmg: ({ talent, attr, calc }, { heal }) =>
    heal(talent.e['激愈水球治疗量2'][0] * calc(attr.hp) / 100 + talent.e['激愈水球治疗量2'][1] * 1)
},{
  title: '[A+]重击伤害',
  dmg: ({ talent, attr , cons }, dmg ) => dmg(talent.a['满蓄力瞄准射击'], 'a2')
},
{
  title: '[A+]重击蒸发伤害',
  dmg: ({ talent, attr , cons }, dmg ) => dmg(talent.a['满蓄力瞄准射击'], 'a2', 'vaporize')
},
{
  title: '[A+]小小关心气泡伤害',
  dmg: ({ talent, attr , cons }, dmg ) => dmg(talent.a['小小关心气泡伤害'], 'a2')
},
{
  title: '[A+]小小关心气泡蒸发伤害',
  dmg: ({ talent, attr , cons }, dmg ) => dmg(talent.a['小小关心气泡伤害'], 'a2', 'vaporize')
},
{
  title: `[T]元素战技伤害提升值`,
  check: ({ cons }) => cons < 1,
  dmg: ({ calc, attr, cons }) => {
    return {
      avg: Math.max( 0 , Math.min( ( ( calc(attr.hp) - 30000 ) / 1000 * 80 ) , 2800 ) )
    }
  }
},
{
  title: `[T]元素战技伤害提升值`,
  check: ({ cons }) => cons > 0,
  dmg: ({ calc, attr, cons }) => {
    return {
      avg: Math.max( 0 , Math.min( ( ( calc(attr.hp) - 30000 ) / 1000 * 100 ) , 3500 ) )
    }
  }
},{
  title: '[E]激愈水球伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['激愈水球伤害'] / 100, 'e')
},{
  title: '[E]激愈水球蒸发伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['激愈水球伤害'] / 100, 'e', 'vaporize')
},{
  title: '[荒性]流涌之刃伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['流涌之刃伤害'] / 100, 'e')
},{
  title: '[荒性]流涌之刃蒸发伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['流涌之刃伤害'] / 100, 'e', 'vaporize')
},{
  title: '[Q]过饱和心意注射伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.q['技能伤害'] / 100, 'q')
},{
  title: '[Q]过饱和心意注射蒸发伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.q['技能伤害'] / 100, 'q', 'vaporize')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'hp,atk,cpct,cdmg,mastery'

export const buffs = [
{
  title: '应有适当的休憩：获得[dmg]%水元素伤害加成',
  data: {
    dmg: 8
  }
},
{
  title: '细致入微的诊疗：基于队伍中所有角色当前生命之契的总和,获得[heal]%治疗加成',
  data: {
    heal: 30
  }
},
{
  title: '2命：敌人的水元素抗性降低[kx]%',
  cons: 2,
   data: {
     kx: 35
   }
},
{
  title: '6命：过饱和心意注射的暴击率提高[qCpct]%,暴击伤害提高[qCdmg]%',
  sort: 9,
  cons: 6,
  data: {
    qCpct: ({ calc, attr }) => Math.min( 20 , calc(attr.hp) / 1000 * 0.4 ) ,
    qCdmg: ({ calc, attr }) => Math.min( 110 , calc(attr.hp) / 1000 * 2.2 )
  }
},
 'vaporize']