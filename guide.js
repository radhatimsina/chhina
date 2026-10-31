/* Chhina guide: rule-based explanation, puja guidance and Q&A.
   Runs entirely in the browser. No AI, no server, no key.
   Content follows common Nepali Hindu (Parashari) tradition. */

/* ---------- Knowledge ---------- */
const GK = {};

GK.signTraits = {
 ne:['साहसी, छिटो निर्णय गर्ने र अगुवाइ गर्न रुचाउने; कहिलेकाहीँ हतारिलो','धैर्यवान्, स्थिर, सुख-सुविधा र सौन्दर्य मन पराउने; अलि जिद्दी','बोलचाल र सिकाइमा तेज, जिज्ञासु, एकैपटक धेरै काम गर्ने; मन अलि चञ्चल','भावुक, घर-परिवारलाई माया गर्ने र अरूको हेरचाह गर्ने; मनस्थिति छिटो बदलिने','आत्मविश्वासी, उदार, सम्मान र नेतृत्व चाहने; अलिकति अहंकार','व्यवस्थित, मिहिनेती, सानो कुरामा ध्यान दिने; धेरै चिन्ता गर्ने बानी','सन्तुलित, मिलनसार र न्यायप्रिय; निर्णय गर्न समय लाग्ने','गहिरो सोच्ने, दृढ र गोप्य स्वभावको; भावना बलियो','आशावादी, धर्म र ज्ञानमा रुचि, स्वतन्त्रताप्रिय; स्पष्ट बोल्ने','जिम्मेवार, अनुशासित, धैर्यसँग मिहिनेत गर्ने; अलि गम्भीर','मौलिक सोच, समाजको भलो चाहने, मित्रवत्; तर अलि टाढा जस्तो देखिने','दयालु, कल्पनाशील र आध्यात्मिक; अरूको दुःख बुझ्ने, छिटो भावुक हुने'],
 en:['courageous, quick to act and likes to lead; can be impatient','patient, steady, enjoys comfort and beauty; can be stubborn','quick with words and learning, curious, does many things at once; restless mind','emotional, devoted to home and family, caring; moods change quickly','confident, generous, seeks respect and leadership; some pride','organised, hardworking, detail-minded; tends to worry','balanced, sociable and fair-minded; slow to decide','deep, determined and private; strong feelings','optimistic, drawn to dharma and learning, freedom-loving; outspoken','responsible, disciplined, a patient worker; somewhat serious','original thinker, community-minded, friendly but a little detached','kind, imaginative and spiritual; empathetic and easily moved']
};

GK.houses = {
 ne:[['तनु भाव','शरीर, स्वभाव र स्वास्थ्य'],['धन भाव','पैसा, परिवार, बोली र खानपान'],['सहज (पराक्रम) भाव','भाइबहिनी, साहस, सीप र छोटा यात्रा'],['सुख भाव','आमा, घर, जग्गा, सवारी र मनको शान्ति'],['सुत भाव','सन्तान, पढाइ, बुद्धि र पूर्वपुण्य'],['रिपु भाव','रोग, ऋण, शत्रु, प्रतिस्पर्धा र सेवा'],['जाया भाव','विवाह, जीवनसाथी र साझेदारी'],['आयु भाव','आयु, अचानक परिवर्तन, गोप्य कुरा र अनुसन्धान'],['भाग्य भाव','भाग्य, बुबा, गुरु, धर्म र लामो यात्रा'],['कर्म भाव','काम, पेसा, पद र प्रतिष्ठा'],['लाभ भाव','आम्दानी, लाभ, साथीभाइ र इच्छा पूरा हुनु'],['व्यय भाव','खर्च, विदेश, निद्रा र मोक्ष']],
 en:[['1st house (Tanu)','self, body, nature and health'],['2nd house (Dhana)','money, family, speech and food'],['3rd house (Sahaja)','siblings, courage, skills and short journeys'],['4th house (Sukha)','mother, home, property, vehicles and peace of mind'],['5th house (Suta)','children, education, intelligence and past merit'],['6th house (Ripu)','illness, debt, rivals, competition and service'],['7th house (Jaya)','marriage, spouse and partnerships'],['8th house (Ayu)','longevity, sudden change, hidden matters and research'],['9th house (Bhagya)','fortune, father, teachers, dharma and long journeys'],['10th house (Karma)','work, career, status and reputation'],['11th house (Labha)','income, gains, friends and fulfilled wishes'],['12th house (Vyaya)','expenses, foreign lands, sleep and spiritual release']]
};

GK.karaka = {
 ne:{Sun:'आत्मा, बुबा, अधिकार र आत्मविश्वास',Moon:'मन, आमा, भावना र शान्ति',Mars:'साहस, ऊर्जा, दाजुभाइ र जग्गा',Mercury:'बुद्धि, बोली, व्यापार र पढाइ',Jupiter:'ज्ञान, गुरु, धर्म, सन्तान र भाग्य',Venus:'प्रेम, विवाह, कला र सुख-सुविधा',Saturn:'मिहिनेत, अनुशासन, धैर्य र ढिलाइ',Rahu:'ठूला इच्छा, विदेश, नयाँ कुरा र भ्रम',Ketu:'वैराग्य, आध्यात्म र अन्तर्ज्ञान'},
 en:{Sun:'soul, father, authority and confidence',Moon:'mind, mother, emotions and peace',Mars:'courage, energy, brothers and land',Mercury:'intellect, speech, trade and study',Jupiter:'wisdom, teachers, dharma, children and fortune',Venus:'love, marriage, arts and comforts',Saturn:'hard work, discipline, patience and delay',Rahu:'ambition, foreign things, new ideas and confusion',Ketu:'detachment, spirituality and intuition'}
};

GK.dasha = {
 ne:{Sun:'पद-प्रतिष्ठा, सरकारी काम, बुबासँगको सम्बन्ध र आत्मविश्वासका विषय अगाडि आउँछन्। अहंकार र तातो/पित्तसम्बन्धी स्वास्थ्यमा ध्यान दिनुहोस्।',Moon:'मन, परिवार, आमा, यात्रा र मानिससँगको सम्पर्कका कुरा प्रमुख हुन्छन्। मनस्थिति माथिमुनि हुन सक्छ, त्यसैले भावनात्मक सन्तुलन महत्त्वपूर्ण छ।',Mars:'ऊर्जा, साहस, जग्गा-जमिन र प्रतिस्पर्धाको समय। प्राविधिक वा मिहिनेतको काममा प्रगति हुन्छ; हतार र झगडाबाट जोगिनुहोस्।',Rahu:'ठूला इच्छा, अचानक परिवर्तन, विदेश वा नयाँ क्षेत्रतर्फ झुकाव बढ्छ। भ्रम, छोटो बाटो र अरूको बहकाउबाट सावधान रहनुहोस्।',Jupiter:'ज्ञान, धर्म, सन्तान, गुरु र विस्तारको समय; सामान्यतः शुभ मानिन्छ। नयाँ अवसर र राम्रा सल्लाहकार भेटिने सम्भावना।',Saturn:'मिहिनेत, जिम्मेवारी र धैर्यको समय। प्रगति ढिलो तर दिगो हुन्छ; अनुशासन र सेवाले राम्रो फल दिन्छ।',Mercury:'पढाइ, व्यापार, लेखन, सञ्चार र हिसाबकिताबको समय। बुद्धि प्रयोगबाट लाभ हुन्छ; धेरै सोचाइ र चिन्तामा ध्यान दिनुहोस्।',Ketu:'वैराग्य, आध्यात्मिक खोज र केही पुराना कुरा छुट्ने वा बदलिने समय। अन्तर्ज्ञान बलियो हुन्छ; अलमलमा निर्णय नगर्नुहोस्।',Venus:'सम्बन्ध, विवाह, कला, सौन्दर्य, घर र सवारीका कुरा प्रमुख हुन्छन्। सुख-सुविधा बढ्छ; खर्च र भोगविलासमा सन्तुलन राख्नुहोस्।'},
 en:{Sun:'Status, government matters, the relationship with father and self-confidence come forward. Watch pride and heat-related health.',Moon:'Mind, family, mother, travel and dealing with people become central. Moods may swing, so emotional balance matters.',Mars:'A time of energy, courage, land and competition. Technical or hard work progresses; avoid haste and quarrels.',Rahu:'Big ambitions, sudden changes and a pull toward foreign or new fields. Beware of confusion, shortcuts and being misled.',Jupiter:'A time of learning, dharma, children, teachers and growth; generally considered auspicious, with new openings and good advisers.',Saturn:'A time of hard work, responsibility and patience. Progress is slow but lasting; discipline and service bring results.',Mercury:'A time for study, trade, writing, communication and accounts. Gains through intelligence; watch overthinking and worry.',Ketu:'Detachment, spiritual seeking, and some old things ending or changing. Intuition is strong; avoid deciding while confused.',Venus:'Relationships, marriage, arts, beauty, home and vehicles become central. Comforts grow; keep spending and indulgence balanced.'}
};

GK.nak = {
 ne:['छिटो, उपचार गर्ने र नयाँ सुरुवात','जिम्मेवारी, दृढता र सिर्जना','तीक्ष्ण, स्पष्ट र शुद्ध गर्ने','सौन्दर्य, वृद्धि र आकर्षण','खोजी, जिज्ञासु र कोमल','भावनाको तीव्रता, परिवर्तन र खोज','फेरि उठ्ने, आशावादी र उदार','पोषण, सेवा र धार्मिक','गहिरो बुद्धि, रहस्य र सतर्कता','परम्परा, पितृ सम्मान र नेतृत्व','आनन्द, कला र आराम','सहयोगी, मित्रवत् र भरपर्दो','हातको सीप, चलाख र व्यावहारिक','सिर्जनशील, कलात्मक र चम्किलो','स्वतन्त्र, व्यापारी बुद्धि र लचिलो','लक्ष्य, धैर्य र दृढ इच्छा','मित्रता, भक्ति र सन्तुलन','जिम्मेवार, रक्षक र अग्रज','जरासम्म पुग्ने, खोजी र परिवर्तन','अपराजेय उत्साह र शुद्धता','स्थायी सफलता, नैतिक र दृढ','सुन्ने, सिक्ने र ज्ञान','सम्पन्नता, सङ्गीत र सक्रियता','उपचार, एकान्त र अनुसन्धान','आदर्शवादी, तीव्र र आध्यात्मिक','गहिरो, शान्त र धैर्यवान्','कोमल, पालनपोषण गर्ने र यात्राको रक्षक'],
 en:['swift, healing, new beginnings','responsibility, endurance, creativity','sharp, clear, purifying','beauty, growth, charm','seeking, curious, gentle','intense feeling, change, inquiry','renewal, optimism, generosity','nourishing, caring, devout','deep insight, mystery, alertness','tradition, honouring ancestors, leadership','enjoyment, arts, relaxation','supportive, friendly, dependable','skilful hands, clever, practical','creative, artistic, bright','independent, business-minded, adaptable','goal-driven, patient, determined','friendship, devotion, balance','responsible, protective, senior role','getting to the root, seeking, transformation','unbeatable enthusiasm, purity','lasting success, ethical, steady','listening, learning, knowledge','prosperity, music, activity','healing, solitude, research','idealistic, intense, spiritual','deep, calm, patient','gentle, nurturing, protector of journeys']
};
GK.nakDeity = {
 ne:['अश्विनीकुमार','यमराज','अग्नि','ब्रह्मा','चन्द्र (सोम)','रुद्र (शिव)','अदिति','बृहस्पति','नाग','पितृ','भग','अर्यमा','सविता (सूर्य)','विश्वकर्मा','वायु','इन्द्र र अग्नि','मित्र','इन्द्र','निऋति','जल (आपः)','विश्वेदेव','विष्णु','अष्टवसु','वरुण','अजैकपाद','अहिर्बुध्न्य','पूषा'],
 en:['the Ashwini Kumaras','Yama','Agni','Brahma','Chandra (Soma)','Rudra (Shiva)','Aditi','Brihaspati','the Nagas','the Pitris (ancestors)','Bhaga','Aryaman','Savitr (Surya)','Vishwakarma','Vayu','Indra and Agni','Mitra','Indra','Nirriti','the Waters (Apah)','the Vishvedevas','Vishnu','the Ashta Vasus','Varuna','Aja Ekapada','Ahirbudhnya','Pushan']
};
GK.gana = 'DMRMDMDDRRMMDRDRDRRMMDRRMMD'; // D=Deva, M=Manushya, R=Rakshasa
GK.ganaName = {ne:{D:'देव गण',M:'मनुष्य गण',R:'राक्षस गण'},en:{D:'Deva gana',M:'Manushya gana',R:'Rakshasa gana'}};
GK.gandmool = [0,8,9,17,18,26];

/* Graha remedies */
GK.remedy = {
 Sun:{mantra:'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः',count:'7000',
  ne:{deity:'सूर्य नारायण',day:'आइतबार',colour:'रातो वा केशरी',daan:'गहुँ, सख्खर (गुड), तामा, रातो कपडा, रातो चन्दन',grain:'गहुँ',samidha:'आँक',flower:'रातो फूल (कनेर वा कमल)',simple:'बिहान नुहाएपछि तामाको लोटामा जल, रातो चन्दन, अक्षता र रातो फूल हालेर सूर्यलाई अर्घ्य दिनुहोस्। आदित्य हृदय स्तोत्र पढ्नुहोस्। बुबा र ठूलाबडाको सम्मान गर्नुहोस्।'},
  en:{deity:'Surya Narayan',day:'Sunday',colour:'red or saffron',daan:'wheat, jaggery, copper, red cloth, red sandalwood',grain:'wheat',samidha:'aak (calotropis)',flower:'red flowers (oleander or lotus)',simple:'After bathing, offer water (arghya) to the rising Sun from a copper lota with red sandalwood, rice and a red flower. Recite the Aditya Hridaya Stotra. Respect your father and elders.'}},
 Moon:{mantra:'ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः',count:'11000',
  ne:{deity:'शिव र पार्वती',day:'सोमबार',colour:'सेतो',daan:'चामल, दूध, दही, सेतो कपडा, चाँदी, सेतो मिठाई',grain:'चामल',samidha:'पलास',flower:'सेतो फूल',simple:'सोमबार शिवलिङ्गमा जल र दूध चढाउनुहोस्, "ॐ नमः शिवाय" १०८ पटक जप्नुहोस्। सोमबार व्रत बस्न सकिन्छ। आमाको सेवा र आशीर्वाद लिनुहोस्।'},
  en:{deity:'Shiva and Parvati',day:'Monday',colour:'white',daan:'rice, milk, curd, white cloth, silver, white sweets',grain:'rice',samidha:'palash',flower:'white flowers',simple:'On Mondays offer water and milk on a Shivalinga and chant "Om Namah Shivaya" 108 times. A Monday fast is traditional. Serve your mother and take her blessing.'}},
 Mars:{mantra:'ॐ क्रां क्रीं क्रौं सः भौमाय नमः',count:'10000',
  ne:{deity:'हनुमान (र कार्तिकेय वा भैरव)',day:'मङ्गलबार',colour:'रातो',daan:'मसुरो दाल, रातो कपडा, गुड, तामा',grain:'मसुरो दाल',samidha:'खयर',flower:'रातो फूल',simple:'मङ्गलबार हनुमान चालीसा पढ्नुहोस्, हनुमानजीलाई सिन्दूर र चमेलीको तेल चढाउनुहोस्, गुड-चनाको प्रसाद बाँड्नुहोस्। रिस र हतारमा निर्णय नगर्नुहोस्।'},
  en:{deity:'Hanuman (also Kartikeya or Bhairav)',day:'Tuesday',colour:'red',daan:'red lentils (masoor), red cloth, jaggery, copper',grain:'red lentils',samidha:'khair',flower:'red flowers',simple:'On Tuesdays recite the Hanuman Chalisa, offer sindoor and jasmine oil to Hanuman, and share jaggery and chickpeas as prasad. Avoid decisions made in anger or haste.'}},
 Mercury:{mantra:'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः',count:'9000',
  ne:{deity:'गणेश र विष्णु',day:'बुधबार',colour:'हरियो',daan:'मुङ, हरियो कपडा, हरियो सागसब्जी, किताब-कापी',grain:'मुङ',samidha:'अपामार्ग (दतिवन)',flower:'दुबो र हरियो पात',simple:'बुधबार गणेशलाई २१ वटा दुबो चढाउनुहोस् र "ॐ गं गणपतये नमः" जप्नुहोस्। विष्णु सहस्रनाम पढ्न सकिन्छ। विद्यार्थीलाई किताब-कापी दान गर्नुहोस्।'},
  en:{deity:'Ganesh and Vishnu',day:'Wednesday',colour:'green',daan:'green gram (moong), green cloth, green vegetables, books and notebooks',grain:'green gram',samidha:'apamarga',flower:'durva grass and green leaves',simple:'On Wednesdays offer 21 blades of durva grass to Ganesh and chant "Om Gam Ganapataye Namah". The Vishnu Sahasranama may be recited. Give books to students.'}},
 Jupiter:{mantra:'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः',count:'19000',
  ne:{deity:'बृहस्पति र विष्णु',day:'बिहीबार',colour:'पहेँलो',daan:'चनाको दाल, बेसार, पहेँलो कपडा, केरा, घ्यू, धार्मिक पुस्तक',grain:'चना',samidha:'पीपल',flower:'पहेँलो फूल (सयपत्री)',simple:'बिहीबार विष्णुको पूजा गर्नुहोस्, केराको बोटमा जल चढाउनुहोस्, बिहीबार व्रत बस्न सकिन्छ। गुरु, शिक्षक र ब्राह्मणको सम्मान गर्नुहोस्। सत्यनारायण पूजा शुभ मानिन्छ।'},
  en:{deity:'Brihaspati and Vishnu',day:'Thursday',colour:'yellow',daan:'chana dal, turmeric, yellow cloth, bananas, ghee, religious books',grain:'chickpeas',samidha:'peepal',flower:'yellow flowers (marigold)',simple:'On Thursdays worship Vishnu and offer water to a banana plant; a Thursday fast is traditional. Honour teachers and priests. Satyanarayan puja is considered auspicious.'}},
 Venus:{mantra:'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः',count:'16000',
  ne:{deity:'लक्ष्मी (र दुर्गा)',day:'शुक्रबार',colour:'सेतो वा चम्किलो',daan:'सेतो चामल, चिनी, घ्यू, दही, सेतो कपडा, अत्तर',grain:'सेतो सिमी (बोडी)',samidha:'डुम्री (उदुम्बर)',flower:'सेतो वा गुलाबी फूल',simple:'शुक्रबार लक्ष्मीको पूजा गरी "ॐ श्रीं महालक्ष्म्यै नमः" जप्नुहोस्, श्री सूक्त पढ्न सकिन्छ। घर सफा र सुगन्धित राख्नुहोस्। कन्यालाई सेतो मिठाई दिनुहोस्।'},
  en:{deity:'Lakshmi (also Durga)',day:'Friday',colour:'white or bright',daan:'white rice, sugar, ghee, curd, white cloth, perfume',grain:'white beans',samidha:'udumbara (cluster fig)',flower:'white or pink flowers',simple:'On Fridays worship Lakshmi and chant "Om Shreem Mahalakshmyai Namah"; the Shri Sukta may be recited. Keep the home clean and fragrant. Give white sweets to young girls.'}},
 Saturn:{mantra:'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः',count:'23000',
  ne:{deity:'शनिदेव र हनुमान',day:'शनिबार',colour:'कालो वा नीलो',daan:'कालो तिल, तोरीको तेल, कालो कपडा, मास (कालो दाल), फलाम, जुत्ता वा छाता',grain:'कालो तिल',samidha:'शमी',flower:'नीलो वा कालो फूल',simple:'शनिबार साँझ पीपलमुनि तोरीको तेलको दियो बाल्नुहोस्, हनुमान चालीसा पढ्नुहोस्। गरिब, वृद्ध र कामदारलाई सहयोग गर्नुहोस्। इमानदारी र धैर्यले शनि प्रसन्न हुन्छन् भन्ने मान्यता छ।'},
  en:{deity:'Shani Dev and Hanuman',day:'Saturday',colour:'black or dark blue',daan:'black sesame, mustard oil, black cloth, urad dal, iron, shoes or an umbrella',grain:'black sesame',samidha:'shami',flower:'blue or dark flowers',simple:'On Saturday evenings light a mustard-oil lamp under a peepal tree and recite the Hanuman Chalisa. Help the poor, the elderly and labourers. Honesty and patience are said to please Shani.'}},
 Rahu:{mantra:'ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः',count:'18000',
  ne:{deity:'दुर्गा (र भैरव)',day:'शनिबार',colour:'नीलो वा धुवाँ रङ',daan:'मास, कालो तिल, कम्बल, नीलो कपडा, नरिवल',grain:'मास (कालो दाल)',samidha:'दुबो',flower:'नीलो फूल',simple:'दुर्गा कवच वा दुर्गा सप्तशतीको पाठ गर्नुहोस्, "ॐ दुं दुर्गायै नमः" जप्नुहोस्। शनिबार वा मङ्गलबार भैरव दर्शन गर्न सकिन्छ। नशा र गलत सङ्गतबाट टाढा रहनुहोस्।'},
  en:{deity:'Durga (also Bhairav)',day:'Saturday',colour:'blue or smoky',daan:'urad dal, black sesame, a blanket, blue cloth, a coconut',grain:'urad dal',samidha:'durva grass',flower:'blue flowers',simple:'Recite the Durga Kavach or Durga Saptashati and chant "Om Dum Durgayai Namah". Visiting Bhairav on Saturday or Tuesday is traditional. Stay away from intoxicants and bad company.'}},
 Ketu:{mantra:'ॐ स्रां स्रीं स्रौं सः केतवे नमः',count:'17000',
  ne:{deity:'गणेश (र भैरव)',day:'मङ्गलबार',colour:'खैरो वा बहुरङ्गी',daan:'कम्बल, सप्तधान्य, तिल, खैरो कपडा, कुकुरलाई खाना',grain:'गहत (कुल्थी)',samidha:'कुश',flower:'बहुरङ्गी फूल',simple:'गणेशको पूजा गरी गणेश अथर्वशीर्ष पढ्नुहोस्। ध्यान र प्रार्थनाले मन स्थिर हुन्छ। सडकका कुकुरलाई खाना दिने चलन छ।'},
  en:{deity:'Ganesh (also Bhairav)',day:'Tuesday',colour:'brown or multicoloured',daan:'a blanket, seven grains, sesame, brown cloth, feeding dogs',grain:'horse gram (gahat)',samidha:'kusha grass',flower:'multicoloured flowers',simple:'Worship Ganesh and recite the Ganesh Atharvashirsha. Meditation and prayer steady the mind. Feeding street dogs is a traditional practice.'}}
};

/* Base samagri for any puja */
GK.baseSamagri = {
 ne:['अक्षता (नभाँचिएको चामल)','अबिर, सिन्दूर र चन्दन','धूप वा अगरबत्ती','दियो, कपासको बत्ती र घ्यू वा तेल','फूल र माला','दुबो र तुलसीको पात','सुपारी र पानका पात','जनै','नरिवल','मौसमी फलफूल','पञ्चामृत: दूध, दही, घ्यू, मह र सख्खर','गङ्गाजल वा सफा जल','कलश वा तामाको लोटा','पूजाको थाली र घण्टी','बस्ने आसन','नैवेद्य (मिठाई, खीर वा फलफूल)','दक्षिणा'],
 en:['Akshata (unbroken rice)','Abir, sindoor and sandalwood','Incense (dhoop or agarbatti)','Lamp, cotton wicks and ghee or oil','Flowers and garlands','Durva grass and tulsi leaves','Betel nuts and betel leaves','Sacred thread (janai)','Coconut','Seasonal fruit','Panchamrit: milk, curd, ghee, honey and sugar','Gangajal or clean water','Kalash or copper lota','Puja plate and bell','A mat to sit on','Naivedya (sweets, kheer or fruit)','Dakshina (offering money)']
};

GK.homeSteps = {
 ne:['नुहाएर सफा लुगा लगाउनुहोस्, पूर्व वा उत्तर फर्केर आसनमा बस्नुहोस्।','दियो र धूप बाल्नुहोस्। सबैभन्दा पहिले गणेशको स्मरण गर्नुहोस्: "ॐ गं गणपतये नमः"।','हातमा जल, अक्षता र फूल लिएर मनमा आफ्नो नाम, गोत्र र पूजाको उद्देश्य भन्दै सङ्कल्प गर्नुहोस्।','देवतालाई क्रमशः जल, चन्दन, अक्षता, फूल, धूप, दियो र नैवेद्य चढाउनुहोस्।','माला लिएर ग्रहको मन्त्र १०८ पटक जप्नुहोस्।','आरती गरी भूलचुकका लागि क्षमा माग्नुहोस्, प्रसाद बाँड्नुहोस्।','सम्भव भए त्यही दिन दान गर्नुहोस्। यस्तो पूजा ११ वा २१ हप्तासम्म नियमित गर्ने चलन छ।'],
 en:['Bathe, wear clean clothes and sit facing east or north.','Light the lamp and incense. Remember Ganesh first: "Om Gam Ganapataye Namah".','Holding water, rice and a flower, make a sankalpa: say your name, gotra and the purpose of the puja in your mind.','Offer to the deity in turn: water, sandalwood, rice, flowers, incense, lamp and naivedya.','Chant the graha mantra 108 times on a mala.','Do aarti, ask forgiveness for any mistakes, and share the prasad.','If possible give the daan on the same day. It is customary to repeat this for 11 or 21 weeks.']
};

/* Named pujas */
GK.pujas = {
 navagraha:{ne:{name:'नवग्रह शान्ति पूजा',why:'धेरै ग्रह कमजोर हुँदा, नयाँ दशा सुरु हुँदा वा जन्मदिनमा नौ ग्रहलाई शान्त पार्न।',items:['नवग्रह मण्डल, यन्त्र वा नौ वटा सुपारी','नौ रङका कपडाका टुक्रा: रातो, सेतो, रातो, हरियो, पहेँलो, सेतो, कालो, नीलो, खैरो','नवधान्य: गहुँ, चामल, मसुरो, मुङ, चना, सेतो सिमी, कालो तिल, मास, गहत','नवग्रह समिधा: आँक, पलास, खयर, अपामार्ग, पीपल, डुम्री, शमी, दुबो, कुश','हवन कुण्ड, हवन सामग्री, घ्यू, जौ र तिल','नौ किसिमका फूल र नौ वटा दियो','कलश, आँपका पात र नरिवल'],note:'हवनसहितको ग्रह शान्ति पुरोहितबाट गराउनु उत्तम हुन्छ। घरमै सजिलो रूपमा नौ दियो बालेर हरेक ग्रहको नाम मन्त्र (जस्तै "ॐ सूर्याय नमः", "ॐ चन्द्राय नमः") ११ पटक जप्न सकिन्छ।'},
  en:{name:'Navagraha shanti puja',why:'To calm all nine planets when several are weak, when a new dasha begins, or on a birthday.',items:['Navagraha mandala or yantra, or nine betel nuts','Nine pieces of cloth: red, white, red, green, yellow, white, black, blue, brown','Nine grains: wheat, rice, red lentils, green gram, chickpeas, white beans, black sesame, urad, horse gram','Nine samidha woods: aak, palash, khair, apamarga, peepal, udumbara, shami, durva, kusha','Havan kund, havan samagri, ghee, barley and sesame','Nine kinds of flowers and nine lamps','Kalash, mango leaves and a coconut'],note:'A full graha shanti with havan is best done by a purohit. A simple home version: light nine lamps and chant each graha’s name mantra (e.g. "Om Suryaya Namah", "Om Chandraya Namah") 11 times.'}},
 satyanarayan:{ne:{name:'सत्यनारायण पूजा',why:'घरमा सुख-शान्ति, गुरु बलियो पार्न, शुभ काम सुरु वा पूरा भएपछि। पूर्णिमामा विशेष।',items:['शालिग्राम वा विष्णु (सत्यनारायण) को तस्बिर','केराको बोट वा पातले सजाइएको मण्डप','पहेँलो कपडा र पहेँलो फूल','तुलसीको पात (धेरै)','पञ्चामृत','प्रसाद: सुजीको हलुवा (सिरा) — सुजी, घ्यू, चिनी, दूध र केरा','केरा र अन्य फलफूल','सत्यनारायण कथाको पुस्तक','नवग्रहका लागि सुपारी, कलश र नरिवल'],note:'परिवार सबै बसेर कथा सुन्ने चलन छ। पुरोहितले पूजा गराउन सक्नुहुन्छ, वा कथा पुस्तक हेरेर घरमै गर्न सकिन्छ।'},
  en:{name:'Satyanarayan puja',why:'For peace and prosperity at home, to strengthen Jupiter, and when starting or completing auspicious work. Especially on Purnima.',items:['Shaligram or picture of Vishnu (Satyanarayan)','A small mandap decorated with banana stems or leaves','Yellow cloth and yellow flowers','Plenty of tulsi leaves','Panchamrit','Prasad: semolina halwa (sira) made with semolina, ghee, sugar, milk and banana','Bananas and other fruit','Satyanarayan Katha book','Betel nuts for the navagraha, kalash and coconut'],note:'The whole family usually sits to hear the katha. A purohit can lead it, or it can be done at home from the katha book.'}},
 rudri:{ne:{name:'रुद्री (रुद्राभिषेक)',why:'चन्द्र, शनि वा राहुको समस्या, मनको शान्ति र स्वास्थ्यको कामनाका लागि। सोमबार र साउन महिनामा विशेष।',items:['शिवलिङ्ग','अभिषेकका लागि जल, गङ्गाजल, दूध, दही, घ्यू, मह र सख्खर','बेलपत्र (धेरै) र धतुरो','सेतो फूल र अक्षता','भस्म वा विभूति','रुद्राक्षको माला','धूप, दियो र नैवेद्य'],note:'पूरा रुद्री पाठ पुरोहितबाट गराइन्छ। घरमै "ॐ नमः शिवाय" जप्दै शिवलिङ्गमा जल र दूधले अभिषेक गर्न सकिन्छ।'},
  en:{name:'Rudri (Rudrabhishek)',why:'For troubles from the Moon, Saturn or Rahu, for peace of mind and for health. Especially on Mondays and in Shrawan.',items:['Shivalinga','For abhishek: water, Gangajal, milk, curd, ghee, honey and sugar','Plenty of bel leaves and dhatura','White flowers and akshata','Bhasma (vibhuti)','Rudraksha mala','Incense, lamp and naivedya'],note:'The full Rudri path is done by a purohit. At home, bathe the Shivalinga with water and milk while chanting "Om Namah Shivaya".'}},
 mrityunjaya:{ne:{name:'महामृत्युञ्जय जप',why:'स्वास्थ्य, सुरक्षा र डर हटाउने कामनाका लागि।',items:['शिवलिङ्ग वा शिवको तस्बिर','रुद्राक्षको माला','बेलपत्र, सेतो फूल','घ्यूको दियो','जल र दूध','धूप र नैवेद्य'],note:'मन्त्र: ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥ घरमै दिनहुँ १०८ पटक जप्न सकिन्छ। सवा लाख जपजस्ता ठूला अनुष्ठान पुरोहितबाट गराइन्छ। स्वास्थ्य समस्या छ भने डाक्टरको उपचार पनि अवश्य गर्नुहोस्।'},
  en:{name:'Mahamrityunjaya jap',why:'For health, protection and freedom from fear.',items:['Shivalinga or picture of Shiva','Rudraksha mala','Bel leaves and white flowers','Ghee lamp','Water and milk','Incense and naivedya'],note:'Mantra: Om Tryambakam Yajamahe Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat. It can be chanted 108 times daily at home; large rites such as 1.25 lakh jap are done by a purohit. If there is a health problem, also see a doctor.'}},
 durga:{ne:{name:'दुर्गा सप्तशती (चण्डी) पाठ',why:'राहुको असर, शत्रु भय, डर र बाधा हटाउन। नवरात्र (दशैं) र मङ्गलबार विशेष।',items:['दुर्गाको मूर्ति वा तस्बिर','रातो कपडा वा चुनरी','सिन्दूर, रातो फूल र माला','नरिवल','सिँगारका सामान (चुरा, टीका)','दुर्गा सप्तशतीको पुस्तक','कलश र जौ (जमरा राख्न)','धूप, दियो र नैवेद्य'],note:'पूरा पाठ नियमसहित गरिन्छ, पुरोहितबाट पनि गराउन सकिन्छ। सजिलो रूपमा दुर्गा कवच पढ्न वा "ॐ दुं दुर्गायै नमः" १०८ पटक जप्न सकिन्छ।'},
  en:{name:'Durga Saptashati (Chandi) path',why:'To reduce Rahu’s effects, fear of enemies, anxiety and obstacles. Especially during Navaratri (Dashain) and on Tuesdays.',items:['Idol or picture of Durga','Red cloth or chunari','Sindoor, red flowers and garland','Coconut','Shringar items (bangles, tika)','Durga Saptashati book','Kalash and barley (for jamara)','Incense, lamp and naivedya'],note:'The full path follows set rules and can be done by a purohit. A simple version: recite the Durga Kavach or chant "Om Dum Durgayai Namah" 108 times.'}},
 lakshmi:{ne:{name:'लक्ष्मी पूजा',why:'धन, आम्दानी र घरको समृद्धिका लागि; शुक्र बलियो पार्न। शुक्रबार र तिहारमा विशेष।',items:['लक्ष्मीको मूर्ति वा तस्बिर','कमल वा रातो/गुलाबी फूल','सिक्का र धान वा चामल','कौडी (वैकल्पिक)','अबिर र कुमकुम','धेरै दियो','मिठाई र सेल रोटी','श्री यन्त्र (वैकल्पिक)'],note:'मन्त्र: "ॐ श्रीं महालक्ष्म्यै नमः" १०८ पटक। घर र पैसा राख्ने ठाउँ सफा राख्नु पूजाकै अङ्ग मानिन्छ।'},
  en:{name:'Lakshmi puja',why:'For wealth, income and prosperity at home; to strengthen Venus. Especially on Fridays and at Tihar.',items:['Idol or picture of Lakshmi','Lotus or red/pink flowers','Coins and paddy or rice','Cowrie shells (optional)','Abir and kumkum','Many lamps','Sweets and sel roti','Shri Yantra (optional)'],note:'Mantra: "Om Shreem Mahalakshmyai Namah" 108 times. Keeping the home and the place where money is kept clean is part of the worship.'}},
 ganesh:{ne:{name:'गणेश पूजा',why:'काम सुरु गर्दा, बाधा हटाउन, बुध वा केतुका लागि। हरेक पूजाको सुरुमा र चतुर्थीमा।',items:['गणेशको मूर्ति वा तस्बिर','२१ वटा दुबो','रातो फूल र सिन्दूर','मोदक वा लड्डु','नरिवल'],note:'मन्त्र: "ॐ गं गणपतये नमः" १०८ पटक। ऋणबाट मुक्तिका लागि ऋणमोचन गणेश स्तोत्र पढ्ने चलन पनि छ।'},
  en:{name:'Ganesh puja',why:'When starting work, to remove obstacles, and for Mercury or Ketu. At the start of every puja and on Chaturthi.',items:['Idol or picture of Ganesh','21 blades of durva grass','Red flowers and sindoor','Modak or laddu','Coconut'],note:'Mantra: "Om Gam Ganapataye Namah" 108 times. Reciting the Rinamochan Ganesh Stotra for relief from debt is also traditional.'}},
 hanuman:{ne:{name:'हनुमान पूजा',why:'शनि र मङ्गलको असर, डर, साहस र मुद्दा-मामिलाका लागि। मङ्गलबार र शनिबार।',items:['हनुमानको मूर्ति वा तस्बिर','सिन्दूर र चमेलीको तेल','रातो फूल','गुड र चना','केरा वा बुँदीको लड्डु','तोरीको तेलको दियो','हनुमान चालीसा'],note:'हनुमान चालीसा ७ वा ११ पटक पढ्ने चलन छ। ब्रह्मचर्य, सत्य र सेवाभाव हनुमान पूजाका मुख्य नियम मानिन्छन्।'},
  en:{name:'Hanuman puja',why:'For Saturn and Mars, fear, courage, and legal troubles. On Tuesdays and Saturdays.',items:['Idol or picture of Hanuman','Sindoor and jasmine oil','Red flowers','Jaggery and chickpeas','Bananas or boondi laddu','Mustard-oil lamp','Hanuman Chalisa'],note:'Reciting the Hanuman Chalisa 7 or 11 times is traditional. Self-restraint, truthfulness and service are its main observances.'}},
 saraswati:{ne:{name:'सरस्वती पूजा',why:'पढाइ, परीक्षा, बोली र सिर्जनाका लागि; बुध र गुरु बलियो पार्न। श्रीपञ्चमीमा विशेष।',items:['सरस्वतीको मूर्ति वा तस्बिर','सेतो र पहेँलो फूल','किताब, कापी र कलम (पूजामा राख्ने)','पहेँलो कपडा र बेसार','खीर र मिठाई'],note:'मन्त्र: "ॐ ऐं सरस्वत्यै नमः" १०८ पटक। पढ्न बस्नु अघि छोटो प्रार्थना गर्ने बानी राम्रो मानिन्छ।'},
  en:{name:'Saraswati puja',why:'For study, exams, speech and creativity; to strengthen Mercury and Jupiter. Especially on Shree Panchami.',items:['Idol or picture of Saraswati','White and yellow flowers','Books, notebooks and pens (placed for blessing)','Yellow cloth and turmeric','Kheer and sweets'],note:'Mantra: "Om Aim Saraswatyai Namah" 108 times. A short prayer before studying is a good habit.'}},
 santan:{ne:{name:'सन्तान गोपाल पूजा',why:'सन्तान प्राप्तिको कामनाका लागि; गुरु र पञ्चम भाव बलियो पार्न।',items:['बालकृष्ण (गोपाल) को मूर्ति वा तस्बिर','तुलसीको पात','माखन र मिश्री','पहेँलो कपडा र फूल','सानो बाँसुरी (वैकल्पिक)'],note:'मन्त्र: ॐ देवकीसुत गोविन्द वासुदेव जगत्पते। देहि मे तनयं कृष्ण त्वामहं शरणं गतः॥ — दिनहुँ १०८ पटक। यससँगै डाक्टरको सल्लाह पनि अवश्य लिनुहोस्।'},
  en:{name:'Santan Gopal puja',why:'For the blessing of children; to strengthen Jupiter and the 5th house.',items:['Idol or picture of Bal Krishna (Gopal)','Tulsi leaves','Butter and rock sugar (makhan-mishri)','Yellow cloth and flowers','A small flute (optional)'],note:'Mantra: Om Devakisuta Govinda Vasudeva Jagatpate, Dehi Me Tanayam Krishna Tvamaham Sharanam Gatah — 108 times daily. Please also seek a doctor’s advice.'}},
 swasthani:{ne:{name:'स्वस्थानी व्रत',why:'नेपाली परम्परामा राम्रो जीवनसाथी र दाम्पत्य सुखको कामनाका लागि। पुस पूर्णिमादेखि माघ पूर्णिमासम्म।',items:['स्वस्थानी व्रतकथाको पुस्तक','शिव-पार्वतीको तस्बिर','फूल, अक्षता, धूप र दियो','अन्तिम दिन चढाउने १०८ वटा रोटी, फल वा फूल','नैवेद्य'],note:'महिनाभरि कथा पढिन्छ। व्रत बस्ने नियम परिवारको चलनअनुसार हुन्छ।'},
  en:{name:'Swasthani vrata',why:'A Nepali tradition for a good spouse and happy married life. From Push Purnima to Magh Purnima.',items:['Swasthani Vrata Katha book','Picture of Shiva and Parvati','Flowers, akshata, incense and lamp','108 rotis, fruits or flowers offered on the last day','Naivedya'],note:'The katha is read throughout the month. Fasting rules follow family custom.'}},
 mool:{ne:{name:'मूल शान्ति',why:'गण्डमूल नक्षत्र (अश्विनी, आश्लेषा, मघा, ज्येष्ठा, मूल, रेवती) मा जन्म भएकाका लागि परम्परागत शान्ति।',items:['पुरोहितले दिनुहुने सूचीअनुसार'],note:'सामान्यतया जन्मको २७ औँ दिनमा, त्यही नक्षत्र परेको दिन गरिन्छ। बाल्यकालमा नभएको भए पुरोहितसँग सोधेर पछि पनि गर्न सकिन्छ।'},
  en:{name:'Mool shanti',why:'Traditional pacification for those born in a Gandmool nakshatra (Ashwini, Ashlesha, Magha, Jyeshtha, Mula, Revati).',items:['As per the list your purohit gives'],note:'Usually done on the 27th day after birth, when the same nakshatra returns. If it was not done in childhood, ask a purohit about doing it later.'}}
};

/* ---------- Helpers ---------- */
const GL = () => guideLang;
const BENEFIC = new Set(['Jupiter','Venus','Moon','Mercury']);
const NODES = new Set(['Rahu','Ketu']);
const gdn = n => GL()==='en' ? String(n) : String(n).replace(/[0-9]/g, d => '०१२३४५६७८९'[d]);
const ord = h => GL()==='en' ? (h + (h===1?'st':h===2?'nd':h===3?'rd':'th')) : gdn(h)+' औँ';
const hName = h => GK.houses[GL()][h-1][0];
const hTheme = h => GK.houses[GL()][h-1][1];
const sName = s => GL()==='en' ? `${SIGN_EN[s]} (${SIGN_W[s]})` : SIGN_NE[s];
const pName = k => GL()==='en' ? GN_EN[k] : GN_DV[k];
const T2 = (ne, en) => GL()==='en' ? en : ne;
const li = arr => '<ul class="gl">' + arr.map(x => `<li>${x}</li>`).join('') + '</ul>';

/* A chart-like object both tabs can produce:
   {lagna (0-11|null), moonChart (bool: lagna taken from Moon), P:{k:{sign,house,retro}},
    nak (0-26|null), pada (1-4|null), dasha:{md,ad,mdEnd,adEnd}|null, saturnNow (0-11)} */
function saturnNowSign(){
  try{ const jd = jdFromMs(Date.now()); return Math.floor(allPositions(jd).pos.Saturn.lon/30); }catch(e){ return null; }
}
function chartFromCalc(ch){
  const P = {};
  ch.gr.forEach(x => { P[x.k] = {sign:x.sign, house:x.house, retro:x.retro && !NODES.has(x.k)}; });
  const cd = currentDasha(ch);
  return {lagna: ch.lagnaSign, moonChart: ch.timeUnknown, P, nak: ch.g.Moon.nak, pada: ch.g.Moon.pada,
    dasha: cd ? {md:cd.md.lord, ad:cd.ad && cd.ad.lord, mdEnd:cd.md.end, adEnd:cd.ad && cd.ad.end} : null,
    saturnNow: saturnNowSign(), Ldeg: ch.timeUnknown ? null : ch.asc.deg};
}
function houseOf(C, sign){ return ((sign - C.lagna + 12) % 12) + 1; }
function lordOf(C, h){ return SIGN_LORD[(C.lagna + h - 1) % 12]; }
function dignity(k, sign){
  if (NODES.has(k)) return '';
  if (EXALT[k] === sign) return 'ex';
  if (DEBIL[k] === sign) return 'deb';
  if (OWN[k].includes(sign)) return 'own';
  return '';
}

/* ---------- Analysis ---------- */
function analyse(C){
  const A = {strong:[], care:[], flags:[], remedies:new Map()};
  const add = (k, why) => { if(!A.remedies.has(k)) A.remedies.set(k, []); A.remedies.get(k).push(why); };
  for (const k of GRAHA){
    const p = C.P[k]; if (!p) continue;
    const d = dignity(k, p.sign), h = p.house;
    if (d==='ex' || d==='own' || (BENEFIC.has(k) && [1,4,5,7,9,10].includes(h)) || (!BENEFIC.has(k) && [3,6,11].includes(h)))
      A.strong.push(k);
    if (d==='deb') add(k, T2(`${pName(k)} नीच राशिमा छ`, `${pName(k)} is debilitated`));
  }
  // Lagna lord in a dusthana
  const LL = lordOf(C, 1), pLL = C.P[LL];
  if (pLL && [6,8,12].includes(pLL.house)) add(LL, T2(`लग्नेश ${pName(LL)} ${ord(pLL.house)} भावमा छ`, `the Lagna lord ${pName(LL)} is in the ${ord(pLL.house)} house`));
  // Moon afflicted
  const pm = C.P.Moon;
  if (pm){
    if ([6,8,12].includes(pm.house) && !C.moonChart) add('Moon', T2(`चन्द्र ${ord(pm.house)} भावमा छ`, `the Moon is in the ${ord(pm.house)} house`));
    ['Saturn','Rahu','Ketu'].forEach(o => { if (C.P[o] && C.P[o].sign===pm.sign) add('Moon', T2(`चन्द्रसँग ${pName(o)} एउटै राशिमा छ`, `the Moon shares a sign with ${pName(o)}`)); });
  }
  // Eclipse combination
  ['Sun','Moon'].forEach(l => ['Rahu','Ketu'].forEach(n => {
    if (C.P[l] && C.P[n] && C.P[l].sign===C.P[n].sign){ add(n, T2(`${pName(l)} र ${pName(n)} सँगै छन् (ग्रहण योग)`, `${pName(l)} is with ${pName(n)} (grahan yoga)`)); A.flags.push('grahan'); }
  }));
  // Manglik
  if (C.P.Mars && !C.moonChart && [1,2,4,7,8,12].includes(C.P.Mars.house)){
    A.flags.push('manglik'); add('Mars', T2(`मङ्गल ${ord(C.P.Mars.house)} भावमा: मांगलिक दोष`, `Mars in the ${ord(C.P.Mars.house)} house: Manglik dosha`));
  }
  // Kaal Sarp (sign level)
  if (C.P.Rahu && C.P.Ketu){
    const r = C.P.Rahu.sign, seven = ['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn'].filter(k => C.P[k]);
    if (seven.length===7){
      const side = s => { const d = (s - r + 12) % 12; return d===0||d===6 ? 0 : (d<6 ? 1 : -1); };
      const sides = seven.map(k => side(C.P[k].sign));
      if (sides.every(x => x===1) || sides.every(x => x===-1)){ A.flags.push('kaalsarp'); add('Rahu', T2('कालसर्प स्वरूप','Kaal Sarpa pattern')); add('Ketu', T2('कालसर्प स्वरूप','Kaal Sarpa pattern')); }
    }
  }
  // Sade sati / dhaiya now
  if (pm && C.saturnNow!=null){
    const d = (C.saturnNow - pm.sign + 12) % 12;
    if (d===11 || d===0 || d===1){ A.flags.push('sadesati'); A.sadePhase = d===11?1:d===0?2:3; add('Saturn', T2('अहिले साढेसाती चलिरहेको छ','Sade Sati is running now')); }
    else if (d===3 || d===7){ A.flags.push('dhaiya'); A.dhaiya = d===3?4:8; add('Saturn', T2(`अहिले शनिको ढैया (चन्द्रबाट ${ord(d+1)} भाव) चलिरहेको छ`, `Saturn’s dhaiya is running now (${ord(d+1)} from the Moon)`)); }
  }
  // Current dasha lords that need care
  if (C.dasha){
    [C.dasha.md, C.dasha.ad].filter(Boolean).forEach((k,i) => {
      const p = C.P[k]; if (!p) return;
      const weak = dignity(k,p.sign)==='deb' || (!C.moonChart && [6,8,12].includes(p.house)) || (!BENEFIC.has(k) && !A.strong.includes(k));
      if (weak) add(k, T2(`अहिले ${pName(k)} को ${i?'अन्तर्दशा':'महादशा'} चलिरहेको छ`, `the ${pName(k)} ${i?'antardasha':'mahadasha'} is running now`));
    });
  }
  if (C.nak!=null && GK.gandmool.includes(C.nak)) A.flags.push('gandmool');
  // Planets that need care for the summary
  for (const k of GRAHA){ const p = C.P[k]; if (!p || C.moonChart) continue;
    if (dignity(k,p.sign)==='deb' || (BENEFIC.has(k) && [6,8,12].includes(p.house))) A.care.push(k); }
  return A;
}

/* ---------- Explanation ---------- */
function placementLine(C, k){
  const p = C.P[k]; if (!p) return '';
  const h = p.house, d = dignity(k, p.sign), ben = BENEFIC.has(k);
  let tone;
  if (C.moonChart) tone = '';
  else if (ben && [1,2,4,5,7,9,10,11].includes(h)) tone = T2('यो राम्रो स्थान हो; यस भावका कुरामा सहयोग र शुभ फल दिन्छ।','This is a good position; it supports and blesses these matters.');
  else if (ben && h===3) tone = T2('यसले सीप र प्रयासमा सहयोग गर्छ।','It helps skills and effort.');
  else if (ben) tone = T2('शुभ ग्रह कमजोर ठाउँमा भएकाले यसको राम्रो फल पाउन अलि बढी मिहिनेत चाहिन्छ।','A gentle planet in a difficult house: its good results need more effort.');
  else if ([3,6,11].includes(h) || (h===10 && ['Sun','Mars','Saturn'].includes(k))) tone = T2('कडा ग्रह यहाँ बलियो मानिन्छ; संघर्ष जितेर अगाडि बढ्ने शक्ति दिन्छ।','A strong, firm planet does well here; it gives the power to overcome struggles.');
  else tone = T2('यस भावका कुरामा केही चुनौती वा ढिलाइ हुन सक्छ; धैर्य र उपाय सहयोगी हुन्छन्।','There may be some challenges or delays in these matters; patience and remedies help.');
  const dg = d==='ex' ? T2(' यो उच्च राशिमा भएकाले धेरै बलियो छ।',' It is exalted, so very strong.')
           : d==='own' ? T2(' आफ्नै राशिमा भएकाले सहज र बलियो छ।',' It is in its own sign, so comfortable and strong.')
           : d==='deb' ? T2(' यो नीच राशिमा भएकाले कमजोर छ; तल दिइएको उपाय उपयोगी हुन्छ।',' It is debilitated, so weak; the remedies below help.') : '';
  const rt = p.retro ? T2(' वक्री भएकाले यसको फल ढिलो वा भित्री रूपमा देखिन सक्छ।',' Being retrograde, its results may come late or inwardly.') : '';
  const where = C.moonChart
    ? T2(`चन्द्रबाट ${ord(h)} स्थान, ${sName(p.sign)} राशिमा।`, `${ord(h)} from the Moon, in ${sName(p.sign)}.`)
    : T2(`${ord(h)} भाव (${hName(h)}: ${hTheme(h)}) मा, ${sName(p.sign)} राशिमा।`, `in the ${hName(h)} — ${hTheme(h)} — in ${sName(p.sign)}.`);
  return `<li><b>${esc(pName(k))}</b> <span class="gk">(${esc(GK.karaka[GL()][k])})</span> ${esc(where)} ${esc(tone+dg+rt)}</li>`;
}

function explainHTML(C){
  const A = analyse(C), out = [], L = GL();
  const h4 = s => out.push(`<h4>${esc(s)}</h4>`);
  const p = s => out.push(`<p>${s}</p>`);
  // 1. Lagna
  if (!C.moonChart){
    const LL = lordOf(C,1), pLL = C.P[LL];
    h4(T2('लग्न (तपाईं स्वयं)','Lagna (you yourself)'));
    p(esc(T2(`तपाईंको लग्न ${sName(C.lagna)} हो। लग्नले शरीर, स्वभाव र जीवनको दिशा देखाउँछ। यस लग्नका मानिस प्रायः ${GK.signTraits.ne[C.lagna]} हुन्छन्।`,
      `Your Lagna (ascendant) is ${sName(C.lagna)}. The Lagna shows body, nature and the direction of life. People with this Lagna are often ${GK.signTraits.en[C.lagna]}.`)));
    if (pLL) p(esc(T2(`लग्नको स्वामी (लग्नेश) ${pName(LL)} हो, जो ${ord(pLL.house)} भाव (${hTheme(pLL.house)}) मा छ। त्यसैले जीवनको धेरै ऊर्जा यी कुरातर्फ जान्छ।`,
      `The Lagna lord is ${pName(LL)}, placed in the ${ord(pLL.house)} house (${hTheme(pLL.house)}). Much of your life energy flows toward these matters.`)));
    if (C.Ldeg!=null && (C.Ldeg<1 || C.Ldeg>29)) p(`<i>${esc(T2('लग्न राशिको सिमानामा छ; जन्म समय केही मिनेट फरक भए लग्न बदलिन सक्छ।','The Lagna is at the edge of a sign; a few minutes’ difference in birth time could change it.'))}</i>`);
  }
  // 2. Moon
  if (C.P.Moon){
    const m = C.P.Moon.sign;
    h4(T2('जन्म राशि (चन्द्र राशि)','Janma rashi (Moon sign)'));
    p(esc(T2(`तपाईंको जन्म राशि ${sName(m)} हो। चन्द्रले मन र भावना देखाउँछ: भित्री रूपमा तपाईं ${GK.signTraits.ne[m]} हुनुहुन्छ।`,
      `Your Moon sign is ${sName(m)}. The Moon shows the mind and feelings: inwardly you are ${GK.signTraits.en[m]}.`)));
    if (C.moonChart) p(`<i>${esc(T2('जन्म समय थाहा नभएकाले यहाँ भावहरू चन्द्रबाट गनिएका छन् (चन्द्र लग्न)।','Because the birth time is unknown, houses here are counted from the Moon (Chandra lagna).'))}</i>`);
  }
  // 3. Nakshatra
  if (C.nak!=null){
    const n = C.nak, g = GK.gana[n], lord = DSEQ[n % 9];
    h4(T2('जन्म नक्षत्र','Janma nakshatra'));
    let s = T2(`तपाईंको जन्म नक्षत्र ${NAK_DV[n]} हो${C.pada?`, चरण ${gdn(C.pada)}`:''}। यसको गुण: ${GK.nak.ne[n]}। देवता ${GK.nakDeity.ne[n]}, स्वामी ग्रह ${GN_DV[lord]}, र ${GK.ganaName.ne[g]}।`,
      `Your birth nakshatra is ${NAK_EN[n]}${C.pada?`, pada ${C.pada}`:''}. Its qualities: ${GK.nak.en[n]}. Its deity is ${GK.nakDeity.en[n]}, its ruling planet ${GN_EN[lord]}, and it belongs to ${GK.ganaName.en[g]}.`);
    if (C.pada) s += T2(` नाम राख्ने अक्षर: "${NAAM[n][C.pada-1]}"।`, ` Traditional naming syllable: "${NAAM[n][C.pada-1]}".`);
    p(esc(s));
    p(esc(T2(`जन्म नक्षत्रका देवता ${GK.nakDeity.ne[n]} को स्मरण गर्नु शुभ मानिन्छ।`,`Remembering the nakshatra deity, ${GK.nakDeity.en[n]}, is considered auspicious.`)));
    if (A.flags.includes('gandmool')) p(esc(T2('यो गण्डमूल नक्षत्र हो। परम्पराअनुसार मूल शान्ति गरिन्छ; बाल्यकालमा भएको छैन भने पुरोहितसँग सोध्नुहोस्।','This is a Gandmool nakshatra. Traditionally a Mool shanti is done; if it was not done in childhood, ask a purohit.')));
  }
  // 4. Planets
  h4(T2('ग्रहहरू कहाँ छन् र के भन्छन्','Where the planets are and what they say'));
  out.push('<ul class="gl">' + GRAHA.map(k => placementLine(C,k)).join('') + '</ul>');
  // 5. Yogas & doshas
  h4(T2('योग र दोष','Yogas and doshas'));
  const y = [];
  const P = C.P;
  if (P.Jupiter && P.Moon && [0,3,6,9].includes((P.Jupiter.sign-P.Moon.sign+12)%12)) y.push(T2('गजकेसरी योग: गुरु चन्द्रबाट केन्द्रमा छ। बुद्धि, मान र सहयोग पाउने योग मानिन्छ।','Gajakesari yoga: Jupiter is in a kendra from the Moon — considered a yoga of wisdom, respect and support.'));
  if (P.Sun && P.Mercury && P.Sun.sign===P.Mercury.sign) y.push(T2('बुधादित्य योग: सूर्य र बुध सँगै छन्। बुद्धि र बोलीमा तीक्ष्णता दिन्छ।','Budhaditya yoga: Sun and Mercury together — sharp intellect and speech.'));
  if (!C.moonChart){
    const pm = {Mars:['रुचक','Ruchaka'],Mercury:['भद्र','Bhadra'],Jupiter:['हंस','Hamsa'],Venus:['मालव्य','Malavya'],Saturn:['शश','Shasha']};
    for (const k in pm){ const q = P[k]; if (q && [1,4,7,10].includes(q.house) && (OWN[k].includes(q.sign)||EXALT[k]===q.sign))
      y.push(T2(`${pm[k][0]} महापुरुष योग: ${GN_DV[k]} बलियो भई केन्द्रमा छ। यो विशेष शुभ योग हो।`,`${pm[k][1]} Mahapurusha yoga: ${GN_EN[k]} is strong in a kendra — a notably auspicious yoga.`)); }
  }
  if (A.flags.includes('manglik')) y.push(T2(`मांगलिक (कुज) दोष: मङ्गल ${ord(P.Mars.house)} भावमा छ। यो धेरै मानिसको चिनामा हुन्छ; विवाहअघि कुण्डली मिलान गर्दा ज्योतिषीले यसलाई हेर्नुहुन्छ। हनुमान पूजा र मङ्गल शान्ति परम्परागत उपाय हुन्।`,`Manglik (Kuja) dosha: Mars is in the ${ord(P.Mars.house)} house. It is common; a jyotishi considers it when matching charts before marriage. Hanuman puja and Mangal shanti are the traditional remedies.`));
  else if (P.Mars && !C.moonChart) y.push(T2('मांगलिक दोष छैन।','No Manglik dosha.'));
  if (A.flags.includes('kaalsarp')) y.push(T2('कालसर्प स्वरूप: सातै ग्रह राहु–केतुको एकातिर छन्। यसले संघर्षपछि सफलता दिने मानिन्छ। नागपञ्चमीमा नाग पूजा, राहु–केतु शान्ति र महामृत्युञ्जय जप परम्परागत उपाय हुन्।','Kaal Sarpa pattern: all seven planets lie on one side of Rahu–Ketu. It is said to bring success after struggle. Nag puja on Nag Panchami, Rahu–Ketu shanti and Mahamrityunjaya jap are traditional remedies.'));
  if (A.flags.includes('grahan')) y.push(T2('ग्रहण योग: सूर्य वा चन्द्र राहु/केतुसँग छ। मन वा आत्मविश्वासमा कहिलेकाहीँ अलमल आउन सक्छ; शिव र दुर्गाको उपासना सहयोगी हुन्छ।','Grahan yoga: the Sun or Moon is with Rahu/Ketu. The mind or confidence may sometimes feel clouded; worship of Shiva and Durga helps.'));
  if (A.flags.includes('sadesati')) y.push(T2(`साढेसाती: अहिले शनि तपाईंको जन्म राशिमाथि घुमिरहेको छ (${['पहिलो','दोस्रो','तेस्रो'][A.sadePhase-1]} चरण)। यो साढे सात वर्षको मिहिनेत र परिपक्वताको समय हो, डराउनुपर्ने होइन। शनिबार हनुमान चालीसा र दान उपयोगी हुन्छन्।`,`Sade Sati: Saturn is now transiting over your Moon sign (phase ${A.sadePhase} of 3). It is a seven-and-a-half-year period of effort and maturing, not something to fear. Hanuman Chalisa and Saturday daan help.`));
  if (A.flags.includes('dhaiya')) y.push(T2(`शनिको ढैया: अहिले शनि चन्द्रबाट ${ord(A.dhaiya)} भावमा छ। करिब अढाई वर्ष धैर्य र सावधानी चाहिन्छ।`,`Saturn’s dhaiya: Saturn is now ${ord(A.dhaiya)} from the Moon. About two and a half years calling for patience and care.`));
  out.push(li(y.length ? y.map(esc) : [esc(T2('यी आधारभूत नियमअनुसार कुनै विशेष योग वा दोष भेटिएन।','No special yogas or doshas were found by these basic rules.'))]));
  // 6. Dasha
  if (C.dasha){
    const md = C.dasha.md, ad = C.dasha.ad, pmd = C.P[md];
    h4(T2('अहिलेको दशा','Your current dasha'));
    p(esc(T2(`अहिले ${GN_DV[md]} को महादशा चलिरहेको छ${C.dasha.mdEnd?` (${isoDate(C.dasha.mdEnd)} सम्म)`:''}। ${GK.dasha.ne[md]}`,
      `You are in the ${GN_EN[md]} mahadasha${C.dasha.mdEnd?` (until ${isoDate(C.dasha.mdEnd)})`:''}. ${GK.dasha.en[md]}`)));
    if (pmd && !C.moonChart) p(esc(T2(`${GN_DV[md]} तपाईंको चिनामा ${ord(pmd.house)} भावमा भएकाले यस दशामा ${hTheme(pmd.house)} सम्बन्धी कुरा विशेष अगाडि आउँछन्।`,
      `Because ${GN_EN[md]} sits in your ${ord(pmd.house)} house, ${hTheme(pmd.house)} come especially to the fore in this period.`)));
    if (ad) p(esc(T2(`भित्र ${GN_DV[ad]} को अन्तर्दशा चलिरहेको छ${C.dasha.adEnd?` (${isoDate(C.dasha.adEnd)} सम्म)`:''}, जसले ${GK.karaka.ne[ad]} का विषय थप्छ।`,
      `Within it runs the ${GN_EN[ad]} antardasha${C.dasha.adEnd?` (until ${isoDate(C.dasha.adEnd)})`:''}, adding themes of ${GK.karaka.en[ad]}.`)));
  }
  // 7. Summary
  h4(T2('छोटकरीमा','In short'));
  const st = [...new Set(A.strong)].map(pName), cr = [...new Set(A.care)].map(pName);
  const sm = [];
  if (st.length) sm.push(T2(`बलिया ग्रह: ${st.join(', ')}। यिनका विषयमा तपाईंलाई सहज साथ मिल्छ।`,`Strong planets: ${st.join(', ')}. Their matters come more easily to you.`));
  if (cr.length) sm.push(T2(`ध्यान दिनुपर्ने ग्रह: ${cr.join(', ')}। तल दिइएका पूजा र उपायले यिनलाई बल दिन्छ।`,`Planets needing care: ${cr.join(', ')}. The pujas and remedies below support them.`));
  sm.push(T2('ग्रहले बाटो देखाउँछन्, तर आफ्नो कर्म, धैर्य र राम्रो आचरणले नै फल बदल्छ।','The planets show tendencies; your own actions, patience and conduct shape the results.'));
  out.push(li(sm.map(esc)));
  out.push(`<p class="hint">${esc(T2('यो शास्त्रीय नियममा आधारित स्वचालित व्याख्या हो। यो मार्गदर्शन मात्र हो, निश्चित भविष्यवाणी होइन। ठूला निर्णयका लागि अनुभवी ज्योतिषीसँग सल्लाह लिनुहोस्।','This is an automatic explanation based on classical rules. It is guidance only, not a certain prediction. For big decisions, consult an experienced jyotishi.'))}</p>`);
  return out.join('');
}

/* ---------- Puja guidance ---------- */
function samagriList(extra){
  return li(GK.baseSamagri[GL()].map(esc).concat(extra.map(x => `<b>${esc(x)}</b>`)));
}
function grahaCard(k, reasons, open){
  const r = GK.remedy[k], d = r[GL()];
  const extra = GL()==='en'
    ? [`${d.colour} cloth`, `${d.grain} (grain of ${GN_EN[k]})`, `${d.samidha} sticks (for havan)`, d.flower]
    : [`${d.colour} कपडा`, `${d.grain} (${GN_DV[k]} को अन्न)`, `${d.samidha} को समिधा (हवनका लागि)`, d.flower];
  return `<details class="pc"${open?' open':''}><summary><b>${esc(pName(k))}</b> — ${esc(T2('पूजा र उपाय','puja and remedies'))}${reasons&&reasons.length?`<span class="why">${esc(reasons.join('; '))}</span>`:''}</summary>
    <div class="pcb">
    <table class="mini"><tbody>
      <tr><th>${esc(T2('देवता','Deity'))}</th><td>${esc(d.deity)}</td></tr>
      <tr><th>${esc(T2('दिन','Day'))}</th><td>${esc(d.day)}</td></tr>
      <tr><th>${esc(T2('मन्त्र','Mantra'))}</th><td><span class="mantra">${esc(r.mantra)}</span><br><span class="hint">${esc(T2(`दिनहुँ १०८ पटक; पूरा अनुष्ठान ${gdn(r.count)} जप (पुरोहितबाट)`,`108 times daily; the full rite is ${r.count} recitations (by a purohit)`))}</span></td></tr>
      <tr><th>${esc(T2('दान','Daan'))}</th><td>${esc(d.daan)}</td></tr>
      <tr><th>${esc(T2('रङ','Colour'))}</th><td>${esc(d.colour)}</td></tr>
    </tbody></table>
    <p><b>${esc(T2('सजिलो उपाय:','Simple practice:'))}</b> ${esc(d.simple)}</p>
    <p><b>${esc(T2('घरमै पूजा गर्ने तरिका:','How to do the puja at home:'))}</b></p>
    <ol class="gl">${GK.homeSteps[GL()].map(s => `<li>${esc(s)}</li>`).join('')}</ol>
    <p><b>${esc(T2('तयार गर्ने सामग्री:','Materials to prepare:'))}</b></p>
    ${samagriList(extra)}
    </div></details>`;
}
function pujaCard(id, open){
  const P = GK.pujas[id][GL()];
  return `<details class="pc"${open?' open':''}><summary><b>${esc(P.name)}</b><span class="why">${esc(P.why)}</span></summary>
    <div class="pcb"><p><b>${esc(T2('विशेष सामग्री:','Special materials:'))}</b></p>${li(P.items.map(esc))}
    <p><b>${esc(T2('साथमा सामान्य सामग्री:','Plus the common materials:'))}</b></p>${li(GK.baseSamagri[GL()].map(esc))}
    <p>${esc(P.note)}</p></div></details>`;
}
function pujaHTML(C){
  const A = analyse(C), parts = [];
  parts.push(`<p>${esc(T2('तपाईंको चिना हेरेर यी ग्रहको शान्ति र उपाय सुझाइएको छ:','Based on your chhina, these planets are suggested for shanti and remedies:'))}</p>`);
  if (A.remedies.size){
    let first = true;
    for (const [k, why] of A.remedies){ parts.push(grahaCard(k, [...new Set(why)], first)); first = false; }
  } else {
    parts.push(`<p>${esc(T2('तपाईंको चिनामा कुनै ग्रह विशेष कमजोर देखिएन। आफ्नो इष्टदेव वा कुल देवताको नियमित पूजा, र वर्षमा एक पटक नवग्रह पूजा पर्याप्त मानिन्छ।','No planet looks especially weak in your chhina. Regular worship of your ishta devata or kul devata, and a Navagraha puja once a year, is considered enough.'))}</p>`);
  }
  const extra = [];
  if (A.flags.includes('manglik')) extra.push('hanuman');
  if (A.flags.includes('kaalsarp') || A.flags.includes('grahan')) extra.push('mrityunjaya','durga');
  if (A.flags.includes('sadesati') || A.flags.includes('dhaiya')) extra.push('hanuman');
  if (A.flags.includes('gandmool')) extra.push('mool');
  if (A.remedies.size >= 3) extra.unshift('navagraha');
  const uniq = [...new Set(extra)];
  if (uniq.length){
    parts.push(`<p><b>${esc(T2('यी पूजा पनि उपयुक्त छन्:','These pujas also fit:'))}</b></p>`);
    uniq.forEach(id => parts.push(pujaCard(id,false)));
  }
  parts.push(`<p class="hint">${esc(T2('पूजाले शान्ति र आत्मबल दिन्छ भन्ने विश्वास छ, तर नतिजाको ग्यारेन्टी हुँदैन। सस्तो र सजिलो उपायबाट सुरु गर्नुहोस्। स्वास्थ्य, कानुनी वा आर्थिक समस्यामा डाक्टर, वकिल वा जानकारको सहयोग पनि अवश्य लिनुहोस्। रत्न लगाउनुअघि योग्य ज्योतिषीसँग सोध्नुहोस्।','Puja is believed to bring peace and inner strength, but results are never guaranteed. Start with the simple, low-cost practices. For health, legal or money problems, also get help from a doctor, lawyer or adviser. Ask a qualified jyotishi before wearing any gemstone.'))}</p>`);
  return parts.join('');
}

/* ---------- Questions ---------- */
const AREAS = {
 career:{houses:[10,11,2],karaka:['Sun','Saturn','Mercury'],pujas:['ganesh','lakshmi'],
  ne:'काम, पेसा र आम्दानी',en:'work, career and income'},
 marriage:{houses:[7],karaka:['Venus','Jupiter'],pujas:['swasthani','lakshmi'],
  ne:'विवाह र सम्बन्ध',en:'marriage and relationships'},
 health:{houses:[1,6],karaka:['Sun','Moon'],pujas:['mrityunjaya','rudri'],
  ne:'स्वास्थ्य',en:'health'},
 education:{houses:[5,4],karaka:['Mercury','Jupiter'],pujas:['saraswati','ganesh'],
  ne:'पढाइ र परीक्षा',en:'study and exams'},
 children:{houses:[5],karaka:['Jupiter'],pujas:['santan','satyanarayan'],
  ne:'सन्तान',en:'children'},
 home:{houses:[4],karaka:['Moon'],pujas:['satyanarayan','rudri'],
  ne:'घर, परिवार र मनको शान्ति',en:'home, family and peace of mind'},
 legal:{houses:[6],karaka:['Mars','Saturn'],pujas:['hanuman','durga'],
  ne:'मुद्दा-मामिला र शत्रु',en:'legal matters and rivals'},
 debt:{houses:[6,11,2],karaka:['Jupiter','Mars'],pujas:['ganesh','hanuman','lakshmi'],
  ne:'ऋण',en:'debt'},
 foreign:{houses:[12,9],karaka:['Rahu'],pujas:['ganesh','durga'],
  ne:'विदेश र यात्रा',en:'going abroad and travel'}
};
function areaAnswer(C, key){
  const a = AREAS[key], out = [], A = analyse(C);
  out.push(`<h4>${esc(T2(`${a.ne} बारे तपाईंको चिना`,`Your chhina on ${a.en}`))}</h4>`);
  const lines = [];
  if (!C.moonChart){
    a.houses.forEach(h => {
      const lord = lordOf(C,h), pl = C.P[lord];
      const occ = GRAHA.filter(k => C.P[k] && C.P[k].house===h).map(pName);
      let s = T2(`${ord(h)} भाव (${hTheme(h)}): स्वामी ${GN_DV[lord]}`, `${ord(h)} house (${hTheme(h)}): ruled by ${GN_EN[lord]}`);
      if (pl){ const d = dignity(lord,pl.sign);
        s += T2(`, जो ${ord(pl.house)} भावमा छ`, `, placed in the ${ord(pl.house)} house`);
        s += [6,8,12].includes(pl.house) ? T2(' — अलि मिहिनेत र धैर्य चाहिने स्थिति।',' — a position that asks for extra effort and patience.')
           : d==='ex'||d==='own' ? T2(' — बलियो र सहयोगी स्थिति।',' — a strong, supportive position.') : T2(' — सामान्य स्थिति।',' — a moderate position.'); }
      s += occ.length ? T2(` यस भावमा ${occ.join(', ')} बसेका छन्।`, ` ${occ.join(', ')} sit in this house.`) : '';
      lines.push(s);
    });
  }
  a.karaka.forEach(k => { const p = C.P[k]; if (!p) return; const d = dignity(k,p.sign);
    lines.push(T2(`${GN_DV[k]} (${GK.karaka.ne[k]}) `, `${GN_EN[k]} (${GK.karaka.en[k]}) `) +
      (C.moonChart ? T2(`${sName(p.sign)} राशिमा।`, `is in ${sName(p.sign)}.`) : T2(`${ord(p.house)} भावमा`, `is in the ${ord(p.house)} house`)) +
      (d==='ex'?T2(', उच्च — बलियो।',', exalted — strong.'):d==='own'?T2(', स्वराशि — बलियो।',', in its own sign — strong.'):d==='deb'?T2(', नीच — कमजोर।',', debilitated — weak.'):C.moonChart?'':T2('।','.')));
  });
  if (key==='marriage' && A.flags.includes('manglik')) lines.push(T2('मांगलिक दोष छ; विवाहअघि ज्योतिषीबाट कुण्डली मिलान गराउनुहोस्।','Manglik dosha is present; have the charts matched by a jyotishi before marriage.'));
  if (C.dasha){ const md = C.dasha.md, p = C.P[md];
    if (p && a.houses.includes(p.house)) lines.push(T2(`अहिलेको ${GN_DV[md]} महादशाले यही क्षेत्रलाई सक्रिय बनाइरहेको छ।`,`Your current ${GN_EN[md]} mahadasha is activating this area right now.`)); }
  out.push(li(lines.map(esc)));
  // Remedies: weakest relevant planet + area pujas
  const rel = new Set(a.karaka); if (!C.moonChart) a.houses.forEach(h => rel.add(lordOf(C,h)));
  const weak = [...rel].filter(k => C.P[k] && (A.remedies.has(k) || dignity(k,C.P[k].sign)==='deb' || (!C.moonChart && [6,8,12].includes(C.P[k].house))));
  out.push(`<p><b>${esc(T2('के गर्ने:','What to do:'))}</b></p>`);
  if (weak.length) weak.slice(0,2).forEach((k,i) => out.push(grahaCard(k, A.remedies.get(k)||[], i===0)));
  a.pujas.forEach(id => out.push(pujaCard(id, !weak.length && id===a.pujas[0])));
  const real = {health:T2('स्वास्थ्य समस्या छ भने पूजासँगै डाक्टरको उपचार अवश्य गर्नुहोस्।','If there is a health problem, see a doctor alongside any puja.'),
    legal:T2('मुद्दा-मामिलामा वकिलको सल्लाह अवश्य लिनुहोस्।','For legal matters, please consult a lawyer.'),
    debt:T2('ऋणका लागि खर्चको बजेट बनाउने र ऋणदातासँग किस्ताबारे कुरा गर्ने व्यावहारिक कदम पनि चाल्नुहोस्।','For debt, also take practical steps: make a budget and talk to lenders about instalments.'),
    children:T2('सन्तानको विषयमा डाक्टरको सल्लाह पनि लिनुहोस्।','Please also seek a doctor’s advice about children.'),
    foreign:T2('विदेश जाँदा कागजात र एजेन्ट राम्ररी जाँच गर्नुहोस्।','When going abroad, check documents and agents carefully.')};
  if (real[key]) out.push(`<p class="hint">${esc(real[key])}</p>`);
  return out.join('');
}

const TOPICS = [
 {id:'nature',ne:'मेरो स्वभाव कस्तो छ?',en:'What is my nature?',kw:['स्वभाव','बानी','व्यक्तित्व','कस्तो','nature','personality','character','स्वभाव']},
 {id:'dasha',ne:'अहिले कुन दशा चलिरहेको छ?',en:'Which dasha am I in now?',kw:['दशा','अन्तर','समय','dasha','period','antardasha','mahadasha']},
 {id:'weak',ne:'कुन ग्रह कमजोर छ, कुन पूजा गर्ने?',en:'Which planet is weak and which puja helps?',kw:['कमजोर','ग्रह','खराब','शान्ति','weak','bad planet','malefic','graha','दोष']},
 {id:'career',ne:'काम र आम्दानी',en:'Work and income',kw:['काम','जागिर','पेसा','व्यापार','आम्दानी','पैसा','धन','कमाइ','नोकरी','career','job','work','business','income','money','wealth','नौकरी','धंधा']},
 {id:'marriage',ne:'विवाह र सम्बन्ध',en:'Marriage and relationships',kw:['विवाह','बिहे','शादी','श्रीमान','श्रीमती','पति','पत्नी','प्रेम','सम्बन्ध','marriage','marry','spouse','husband','wife','love','relationship']},
 {id:'health',ne:'स्वास्थ्य',en:'Health',kw:['स्वास्थ्य','रोग','बिरामी','बिमारी','health','illness','sick','disease','स्वास्थ']},
 {id:'education',ne:'पढाइ र परीक्षा',en:'Study and exams',kw:['पढाइ','परीक्षा','विद्या','शिक्षा','पढ्न','पढ़ाई','education','study','exam','school','college']},
 {id:'children',ne:'सन्तान',en:'Children',kw:['सन्तान','बच्चा','छोरा','छोरी','गर्भ','संतान','children','child','baby','son','daughter','pregnan']},
 {id:'home',ne:'घर र मनको शान्ति',en:'Home and peace of mind',kw:['घर','परिवार','शान्ति','झगडा','मन','home','family','peace','fight','quarrel','शांति']},
 {id:'legal',ne:'मुद्दा र शत्रु',en:'Legal matters and rivals',kw:['मुद्दा','शत्रु','दुश्मन','अदालत','केस','court','legal','case','enemy','rival']},
 {id:'debt',ne:'ऋण',en:'Debt',kw:['ऋण','कर्जा','सापटी','कर्ज','debt','loan']},
 {id:'foreign',ne:'विदेश',en:'Going abroad',kw:['विदेश','भिसा','बाहिर जाने','abroad','foreign','visa','overseas','travel']},
 {id:'navagraha',ne:'नवग्रह शान्तिको सामग्री',en:'Navagraha shanti materials',kw:['नवग्रह','navagraha','nine planets']},
 {id:'home_puja',ne:'घरमै गर्ने सजिलो पूजा',en:'A simple puja at home',kw:['सजिलो','घरमै','घरमा','मन्त्र','दान','simple','home puja','mantra','daan','donation','easy']},
 {id:'manglik',ne:'मांगलिक वा कालसर्प दोष',en:'Manglik or Kaal Sarpa dosha',kw:['मांगलिक','मङ्गलिक','मंगलिक','कालसर्प','manglik','mangal dosh','kaal','kal sarp']},
 {id:'sadesati',ne:'साढेसाती',en:'Sade Sati',kw:['साढे','साढेसाती','ढैया','sade','sati','dhaiya','dhaiyya']},
 {id:'gem',ne:'रत्न लगाउने?',en:'Should I wear a gemstone?',kw:['रत्न','औंठी','औँठी','पत्थर','gem','stone','ring']},
 {id:'name',ne:'नाम राख्ने अक्षर',en:'Naming syllable',kw:['नाम','नामाक्षर','अक्षर','name','letter','syllable']}
];
const PUJA_KW = {satyanarayan:['सत्यनारायण','satyanarayan','satya narayan'],rudri:['रुद्री','रुद्राभिषेक','rudri','rudrabhishek','abhishek'],mrityunjaya:['मृत्युञ्जय','मृत्युंजय','mrityunjaya','mahamrityunjay'],durga:['दुर्गा','सप्तशती','चण्डी','durga','chandi','saptashati'],lakshmi:['लक्ष्मी','lakshmi','laxmi'],ganesh:['गणेश','ganesh','ganapati'],hanuman:['हनुमान','hanuman'],saraswati:['सरस्वती','saraswati'],santan:['सन्तान गोपाल','santan gopal'],swasthani:['स्वस्थानी','swasthani'],mool:['मूल शान्ति','mool shanti','gandmool','गण्डमूल']};
const GRAHA_KW = {Sun:['सूर्य','sun','surya'],Moon:['चन्द्र','चन्द्रमा','moon','chandra'],Mars:['मङ्गल','मंगल','mars','mangal'],Mercury:['बुध','mercury','budh'],Jupiter:['गुरु','बृहस्पति','jupiter','guru','brihaspati'],Venus:['शुक्र','venus','shukra'],Saturn:['शनि','saturn','shani'],Rahu:['राहु','rahu'],Ketu:['केतु','ketu']};

function topicAnswer(C, id){
  const A = analyse(C);
  switch(id){
    case 'nature': {
      const s = [];
      if (!C.moonChart) s.push(T2(`लग्न ${sName(C.lagna)}: बाहिरबाट तपाईं ${GK.signTraits.ne[C.lagna]}।`,`Lagna ${sName(C.lagna)}: outwardly you are ${GK.signTraits.en[C.lagna]}.`));
      if (C.P.Moon) s.push(T2(`चन्द्र ${sName(C.P.Moon.sign)}: मनबाट तपाईं ${GK.signTraits.ne[C.P.Moon.sign]}।`,`Moon ${sName(C.P.Moon.sign)}: inwardly you are ${GK.signTraits.en[C.P.Moon.sign]}.`));
      if (C.nak!=null) s.push(T2(`नक्षत्र ${NAK_DV[C.nak]}: ${GK.nak.ne[C.nak]}।`,`Nakshatra ${NAK_EN[C.nak]}: ${GK.nak.en[C.nak]}.`));
      const st = [...new Set(A.strong)]; if (st.length) s.push(T2(`बलियो पक्ष: ${st.map(k=>GK.karaka.ne[k]).join('; ')}।`,`Strong points: ${st.map(k=>GK.karaka.en[k]).join('; ')}.`));
      return `<h4>${esc(T2('तपाईंको स्वभाव','Your nature'))}</h4>`+li(s.map(esc));
    }
    case 'dasha': {
      if (!C.dasha) return `<p>${esc(T2('दशा थाहा पाउन जन्म मिति र समय चाहिन्छ। "चिना बनाउने" मा विवरण हाल्नुहोस्, वा चिनामा लेखिएको अहिलेको महादशा छान्नुहोस्।','The dasha needs the birth date and time. Enter them in "Create a chhina", or choose the current mahadasha written in your chhina.'))}</p>`;
      const md = C.dasha.md;
      let h = `<h4>${esc(T2(`${GN_DV[md]} महादशा`,`${GN_EN[md]} mahadasha`))}</h4><p>${esc(GK.dasha[GL()][md])}</p>`;
      if (C.dasha.ad) h += `<p>${esc(T2(`अन्तर्दशा: ${GN_DV[C.dasha.ad]} — ${GK.karaka.ne[C.dasha.ad]}।`,`Antardasha: ${GN_EN[C.dasha.ad]} — ${GK.karaka.en[C.dasha.ad]}.`))}</p>`;
      h += grahaCard(md, A.remedies.get(md)||[], A.remedies.has(md));
      return h;
    }
    case 'weak': return `<h4>${esc(T2('कमजोर ग्रह र उपाय','Weak planets and remedies'))}</h4>` + pujaHTML(C);
    case 'navagraha': return pujaCard('navagraha', true);
    case 'home_puja': {
      const k = A.remedies.size ? [...A.remedies.keys()][0] : (C.dasha ? C.dasha.md : (C.moonChart ? 'Moon' : lordOf(C,1)));
      return `<h4>${esc(T2('घरमै गर्न सकिने सजिलो पूजा','A simple puja you can do at home'))}</h4><p>${esc(T2(`तपाईंको चिनाअनुसार ${GN_DV[k]} को उपासनाबाट सुरु गर्नु राम्रो हुन्छ:`,`Based on your chhina, starting with ${GN_EN[k]} is a good choice:`))}</p>` + grahaCard(k, A.remedies.get(k)||[], true);
    }
    case 'manglik': {
      const s = [];
      if (C.moonChart) s.push(T2('मांगलिक दोष हेर्न लग्न चाहिन्छ (जन्म समय वा चिनामा लेखिएको लग्न)।','Checking Manglik dosha needs the Lagna (birth time, or the Lagna written in the chhina).'));
      else s.push(A.flags.includes('manglik') ? T2(`मङ्गल ${ord(C.P.Mars.house)} भावमा भएकाले मांगलिक दोष छ। धेरैको चिनामा यस्तो हुन्छ; विवाहअघि कुण्डली मिलानमा हेरिन्छ। दुवैको चिनामा मांगलिक भए दोष मेटिने मान्यता पनि छ।`,`Mars in the ${ord(C.P.Mars.house)} house makes Manglik dosha present. It is common and is checked when matching charts before marriage; tradition holds it is cancelled when both partners are Manglik.`) : T2('मांगलिक दोष छैन।','There is no Manglik dosha.'));
      s.push(A.flags.includes('kaalsarp') ? T2('कालसर्प स्वरूप छ।','A Kaal Sarpa pattern is present.') : T2('कालसर्प स्वरूप छैन।','There is no Kaal Sarpa pattern.'));
      let h = `<h4>${esc(T2('मांगलिक र कालसर्प','Manglik and Kaal Sarpa'))}</h4>` + li(s.map(esc));
      if (A.flags.includes('manglik')) h += grahaCard('Mars', A.remedies.get('Mars'), true) + pujaCard('hanuman', false);
      if (A.flags.includes('kaalsarp')) h += grahaCard('Rahu', A.remedies.get('Rahu'), false) + pujaCard('mrityunjaya', false);
      return h;
    }
    case 'sadesati': {
      if (!C.P.Moon) return `<p>${esc(T2('साढेसाती हेर्न चन्द्रको राशि चाहिन्छ।','Sade Sati needs the Moon sign.'))}</p>`;
      let h = `<h4>${esc(T2('साढेसाती र शनिको ढैया','Sade Sati and dhaiya'))}</h4>`;
      if (A.flags.includes('sadesati')) h += `<p>${esc(T2(`अहिले साढेसातीको ${['पहिलो','दोस्रो','तेस्रो'][A.sadePhase-1]} चरण चलिरहेको छ। यो मिहिनेत, जिम्मेवारी र परिपक्वताको समय हो।`,`You are in phase ${A.sadePhase} of 3 of Sade Sati — a time of effort, responsibility and maturing.`))}</p>` + grahaCard('Saturn', A.remedies.get('Saturn'), true) + pujaCard('hanuman', false);
      else if (A.flags.includes('dhaiya')) h += `<p>${esc(T2(`अहिले शनिको ढैया (चन्द्रबाट ${ord(A.dhaiya)} भाव) चलिरहेको छ।`,`Saturn’s dhaiya is running now (${ord(A.dhaiya)} from the Moon).`))}</p>` + grahaCard('Saturn', A.remedies.get('Saturn'), true);
      else h += `<p>${esc(T2('अहिले साढेसाती वा ढैया चलिरहेको छैन।','Neither Sade Sati nor dhaiya is running now.'))}</p>`;
      return h;
    }
    case 'gem': return `<h4>${esc(T2('रत्न','Gemstones'))}</h4><p>${esc(T2('रत्न लगाउनुअघि योग्य ज्योतिषीसँग अवश्य सल्लाह लिनुहोस्। कमजोर वा अशुभ भावको ग्रहको रत्न लगाउँदा उल्टो असर हुन सक्छ भन्ने मान्यता छ। रत्नबिना पनि मन्त्र, दान र पूजा प्रभावकारी मानिन्छन्, र यी सुरक्षित छन्।','Please consult a qualified jyotishi before wearing any gemstone. Tradition holds that the stone of a badly placed planet can backfire. Mantra, daan and puja are considered effective without stones, and they are safe.'))}</p>`;
    case 'name': {
      if (C.nak==null || !C.pada) return `<p>${esc(T2('नाम राख्ने अक्षरका लागि जन्म नक्षत्र र चरण चाहिन्छ।','The naming syllable needs the birth nakshatra and pada.'))}</p>`;
      return `<h4>${esc(T2('नाम राख्ने अक्षर','Naming syllable'))}</h4><p>${esc(T2(`${NAK_DV[C.nak]} नक्षत्र, चरण ${gdn(C.pada)} अनुसार नाम "${NAAM[C.nak][C.pada-1]}" बाट सुरु गर्ने चलन छ। यही नक्षत्रका चार अक्षर: ${NAAM[C.nak].join(', ')}।`,`For ${NAK_EN[C.nak]} nakshatra, pada ${C.pada}, the name traditionally starts with "${NAAM[C.nak][C.pada-1]}". The four syllables of this nakshatra: ${NAAM[C.nak].join(', ')}.`))}</p>`;
    }
    default: if (AREAS[id]) return areaAnswer(C, id);
  }
  return '';
}
function answerQuestion(C, q){
  const s = q.toLowerCase();
  const has = arr => arr.some(w => s.includes(w.toLowerCase()));
  // A named puja → its samagri card
  for (const id in PUJA_KW) if (has(PUJA_KW[id])) return pujaCard(id, true);
  // Named topics (specific before general)
  const order = ['manglik','sadesati','gem','name','navagraha','dasha','career','marriage','health','education','children','legal','debt','foreign','home','home_puja','weak','nature'];
  for (const id of order){ const tp = TOPICS.find(x => x.id===id); if (tp && has(tp.kw)) return topicAnswer(C, id); }
  // A named graha → its remedy card
  for (const k in GRAHA_KW) if (has(GRAHA_KW[k])){ const A = analyse(C); return grahaCard(k, A.remedies.get(k)||[], true); }
  return null;
}

/* ---------- Panels (UI) ---------- */
const guideState = {c:{turns:[]}, r:{turns:[]}};
function guidePanels(px){
  const opts = [['ne','नेपाली'],['en','English']].map(([v,l]) => `<option value="${v}" ${GL()===v?'selected':''}>${l}</option>`).join('');
  return `<div class="card ai"><div class="aihead"><h2>${esc(T2('तपाईंको चिनाको व्याख्या','What your chhina says'))}</h2>
      <label class="inl">${esc(T2('भाषा','Language'))} <select id="${px}GLang">${opts}</select></label></div>
    <div class="out" id="${px}Exp"></div></div>
  <div class="card ai"><h2>${esc(T2('पूजा र उपाय','Puja and remedies'))}</h2><div class="out" id="${px}Puja"></div></div>
  <div class="card ai"><h2>${esc(T2('आफ्नो चिनाबारे प्रश्न सोध्नुहोस्','Ask about your chhina'))}</h2>
    <p class="hint">${esc(T2('तलको विषय छान्नुहोस् वा आफ्नो प्रश्न लेख्नुहोस्। उत्तर तपाईंको चिना र परम्परागत नियमका आधारमा तुरुन्तै आउँछ।','Pick a topic below or type your question. Answers come instantly from your chhina and traditional rules.'))}</p>
    <div class="chips" id="${px}Chips"></div>
    <div class="chat" id="${px}Chat" aria-live="polite"></div>
    <div class="askrow"><textarea id="${px}Q" rows="2" placeholder="${esc(T2('जस्तै: मेरो काममा समस्या छ, कुन पूजा गर्ने?','e.g. I have trouble at work, which puja should I do?'))}"></textarea>
      <button class="btn" id="${px}Send" type="button">${esc(T2('सोध्नुहोस्','Ask'))}</button></div>
    <div class="btnrow"><button class="btn ghost" id="${px}Allp" type="button">${esc(T2('सबै पूजाको सामग्री सूची','Materials for all pujas'))}</button></div>
    <div id="${px}AllpOut"></div></div>`;
}
function wireGuide(px, C){
  const $ = id => document.getElementById(px+id);
  const fill = () => {
    $('Exp').innerHTML = explainHTML(C);
    $('Puja').innerHTML = pujaHTML(C);
    $('Chips').innerHTML = TOPICS.map((tp,i) => `<button type="button" data-i="${i}">${esc(GL()==='en'?tp.en:tp.ne)}</button>`).join('');
    $('Chips').querySelectorAll('button').forEach(b => b.onclick = () => ask(TOPICS[+b.dataset.i][GL()==='en'?'en':'ne'], TOPICS[+b.dataset.i].id));
    renderTurns();
  };
  const renderTurns = () => {
    $('Chat').innerHTML = guideState[px].turns.map(t => t.u ? `<div class="msg u">${esc(t.text)}</div>` : `<div class="msg a">${t.html}</div>`).join('');
  };
  const ask = (q, id) => {
    let html = id ? topicAnswer(C, id) : answerQuestion(C, q);
    if (!html){
      html = `<p>${esc(T2('माफ गर्नुहोस्, यो प्रश्न बुझिएन। तलका मध्ये कुनै विषय छान्नुहोस्:','Sorry, I did not recognise that question. Please choose one of these topics:'))}</p>` +
        li(TOPICS.map(tp => esc(GL()==='en'?tp.en:tp.ne)));
    }
    guideState[px].turns.push({u:true, text:q}, {u:false, html});
    renderTurns(); $('Q').value = '';
    const last = $('Chat').lastElementChild; if (last) last.scrollIntoView({behavior:'smooth', block:'nearest'});
  };
  const send = () => { const q = $('Q').value.trim(); if (q) ask(q); };
  $('Send').onclick = send;
  $('Q').onkeydown = e => { if (e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send(); } };
  $('Allp').onclick = () => { const o = $('AllpOut'); o.innerHTML = o.innerHTML ? '' : Object.keys(GK.pujas).map(id => pujaCard(id,false)).join(''); };
  $('GLang').onchange = e => { guideLang = e.target.value; document.querySelectorAll('select[id$="GLang"]').forEach(x => x.value = guideLang); fill(); };
  fill();
}
