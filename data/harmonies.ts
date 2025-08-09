export type Harmony = { key:string; icon:string; name:string; dimension:string; state:string; path:string; mantra:string; desc:string }
const zh: Harmony[] = [
  { key:'self', icon:'🌅', name:'自我和', dimension:'意识的和谐', state:'内省成镜，心光自明', path:'自省一念，练习「自我和」。', mantra:'脱下伪装，活出真实，看似脆弱，却无比自在。', desc:'与内在自我对话，让情绪、认知与行动保持一致，减少内耗，活出真实的自己。' },
  { key:'social', icon:'🪞', name:'社会和', dimension:'关系的和谐', state:'外连成桥，众生无隔', path:'理解一瞬，铺垫「社会和」。', mantra:'减少内耗，保持坦然；彼此共鸣，彼此成就；在人情世故之外，安静有光地存在。', desc:'在与他人的交往中保持平衡，不被外界裹挟，也不刻意对抗。' },
  { key:'nature', icon:'🍃', name:'自然和', dimension:'环境的和谐', state:'外采成流，四时入怀', path:'顺应一息，回归「自然和」。', mantra:'天地有大美，而我在其中；随江河起落，合天地吐纳；偕四时流转，共万物生息。', desc:'顺应四时节律，与阳光、风雨、水草共生，让身心在环境中得以复原与滋养。' },
  { key:'core', icon:'💓', name:'能量和', dimension:'核心的和谐', state:'内炼成炉，能量充盈', path:'调养一日，充盈「能量和」。', mantra:'回归身体的根，守住生命的气。身体不是我的奴隶，而是我最亲密的伙伴。', desc:'调顺身体腹腔核心区的生理与心理联结，让呼吸、气血与意识同频，稳住生命的“根”。' },
  { key:'resonance', icon:'📡', name:'共频和', dimension:'协作的和谐', state:'内合成一，同频共振', path:'同频一场，凝聚「共频和」。', mantra:'共生、共创、共赢、共振、共享、共鸣、共识、共勉、共存——共同构成和谐的协作之道。', desc:'让个体与群体、系统、智能体在频率上共振，实现资源与力量的最佳流动。' },
  { key:'egoless', icon:'🌌', name:'无我和', dimension:'存在的和谐', state:'无内无外，无边无际', path:'放下一心，抵达「无我和」。', mantra:'当我不再执着于存在，我开始真正存在。', desc:'超越自我执念，融入万物的自由流动，在无内无外中，自然而然、生生不息。' }
]
const en: Harmony[] = [
  { key:'self', icon:'🌅', name:'Self Harmony', dimension:'Harmony of Awareness', state:'Seeing within, light from the heart', path:'One breath of self-inquiry.', mantra:'Drop the disguise; live true. It may seem fragile, yet deeply free.', desc:'Dialogue with the inner self so emotions, cognition, and action align—less friction, a truer life.' },
  { key:'social', icon:'🪞', name:'Social Harmony', dimension:'Harmony of Relationships', state:'Bridging outward, no separation', path:'One moment of understanding.', mantra:'Less inner friction, more calm. We resonate and uplift each other—quietly radiant beyond social games.', desc:'Keep balance in relating—neither swept by the crowd nor fighting it.' },
  { key:'nature', icon:'🍃', name:'Nature Harmony', dimension:'Harmony with Environment', state:'Flow outward, seasons within', path:'One breath in rhythm with nature.', mantra:'Great beauty lives in heaven and earth; rise and fall with rivers; breathe with the world; turn with the seasons.', desc:'Attune to seasonal rhythms; let nature restore and nourish body and mind.' },
  { key:'core', icon:'💓', name:'Core Energy Harmony', dimension:'Harmony of Core Energy', state:'Inner alchemy, energy abundant', path:'One day of gentle tuning.', mantra:'Return to the root of the body; guard the breath of life. My body is not a slave, but my closest companion.', desc:'Synchronize breath, blood and awareness through the core so the root of life steadies.' },
  { key:'resonance', icon:'📡', name:'Resonance Harmony', dimension:'Harmony of Resonance', state:'One within, frequencies in sync', path:'One session of co-resonance.', mantra:'Co-living, co-creation, win-win, resonance, sharing, empathy, consensus, encouragement, coexistence—modes of collaboration.', desc:'Let individuals, groups and intelligent systems resonate to optimize the flow of resources and power.' },
  { key:'egoless', icon:'🌌', name:'Egoless Harmony', dimension:'Harmony Beyond Self', state:'No inside or outside, boundless', path:'One heart released.', mantra:'When I no longer cling to existence, I truly exist.', desc:'Transcend self-fixation and merge with the free flow of all things—spontaneous and unending.' }
]
export function getHarmonies(locale:'zh'|'en'='zh'){ return locale==='en'? en : zh }
