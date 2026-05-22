"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Note = {
  title: string;
  body: string;
};

type Subject = {
  name: string;
  shortNotes: Note[];
  longNotes: Note[];
};

const subjects: Subject[] = [
  {
    "name": "Political Science",
    "shortNotes": [
      {
        "title": "Meaning of Political Science",
        "body": "Political Science studies the state, government, power, rights, duties and political behaviour."
      },
      {
        "title": "Democracy",
        "body": "Democracy means rule by the people through elections, public opinion and participation."
      },
      {
        "title": "Constitution",
        "body": "A constitution is the supreme law that defines government powers and citizens’ rights."
      },
      {
        "title": "Federalism",
        "body": "Federalism divides powers between central and state governments."
      },
      {
        "title": "Political Participation",
        "body": "Political participation includes voting, campaigning, public discussion and involvement in politics."
      }
    ],
    "longNotes": [
      {
        "title": "Importance of Political Science",
        "body": "Political Science is important because it studies the state, government, law, power, rights and duties. It helps students understand how political institutions work and how citizens take part in public life. In a democracy, citizens cannot remain completely silent or unaware because government decisions affect education, employment, security, taxation and development. Political Science gives the basic knowledge needed to judge political promises and public policies.\n\nThe subject also explains major ideas such as liberty, equality, justice, democracy, sovereignty and constitutionalism. These ideas are not only theoretical; they are connected with daily political life. For example, the right to vote, freedom of speech and rule of law are practical expressions of political principles.\n\nFor Mizoram students, Political Science is useful because it helps explain local governance, village councils, state politics, tribal identity and relations with the Union Government. It also prepares students for MPSC, UGC NET and other competitive examinations. Therefore, Political Science is not just the study of politics; it is the study of how society governs itself."
      },
      {
        "title": "Democracy and its Features",
        "body": "Democracy is a system of government in which the people are the ultimate source of political authority. In modern democracies, people usually rule through elected representatives. The most important feature of democracy is regular, free and fair elections. Elections allow citizens to choose leaders and remove governments peacefully.\n\nAnother feature is universal adult franchise. This means every adult citizen has the right to vote without discrimination. Democracy also requires rule of law, where everyone, including rulers, must obey the law. Fundamental rights, freedom of speech, freedom of association and protection of minorities are also necessary for real democracy.\n\nDemocracy encourages public discussion and criticism of the government. Opposition parties, media, civil society and student groups play an important role in keeping the government accountable. However, democracy can become weak when money power, corruption, fear, communal politics or misinformation dominate elections.\n\nIn India, democracy is important because it holds together a very diverse society. It gives different regions and communities a voice within the political system. Therefore, democracy is not only voting; it is a continuous practice of participation, accountability and respect for rights."
      },
      {
        "title": "Indian Constitution",
        "body": "The Constitution of India is the supreme law of the country. It came into force on 26 January 1950 and provides the structure of government, distribution of powers and rights of citizens. It establishes India as a sovereign, socialist, secular and democratic republic. The Constitution is the foundation of Indian political life because all laws and government actions must follow it.\n\nThe Constitution provides Fundamental Rights such as equality, freedom, religious freedom and constitutional remedies. These rights protect citizens from arbitrary power. It also includes Directive Principles of State Policy, which guide the government to promote welfare, justice and equality. Fundamental Duties remind citizens about their responsibilities toward the nation.\n\nIndia’s Constitution is federal in structure but has a strong Centre. It divides powers between the Union and the States through different lists. For states like Mizoram, constitutional protection is important because it allows preservation of local customs, land systems and identity within the Indian Union.\n\nThus, the Indian Constitution is not just a legal document. It is a political and moral framework for democracy, unity, justice and responsible governance."
      },
      {
        "title": "Federalism in India",
        "body": "Federalism is a system in which powers are divided between the central government and state governments. India follows a federal system with some unitary features. The Constitution divides subjects into the Union List, State List and Concurrent List. The Union deals with subjects like defence, foreign affairs and currency, while states handle matters like police, public health and agriculture.\n\nFederalism is necessary for India because the country is large and diverse. Different states have different languages, cultures, histories and development needs. A single central authority cannot properly manage every local issue. State governments are closer to the people and can respond to local problems more directly.\n\nHowever, Indian federalism also gives strong powers to the Centre, especially during emergencies. This sometimes creates tension between the Union and the states. Cooperative federalism is therefore important. Institutions such as the GST Council and NITI Aayog show the need for coordination.\n\nFor Mizoram, federalism is vital because it protects regional identity and allows local priorities to be represented. Good federalism balances national unity with regional autonomy."
      },
      {
        "title": "Role of Political Parties",
        "body": "Political parties are organised groups that seek to capture political power through elections. They are essential in democracy because they connect citizens with the government. Parties present policies, select candidates, contest elections and form governments. Without political parties, modern representative democracy would be difficult to operate.\n\nPolitical parties also educate people about public issues. They mobilise voters and give shape to public opinion. In parliamentary systems, the majority party forms the government while opposition parties criticise and monitor government actions. A strong opposition is necessary because it prevents misuse of power and keeps democracy alive.\n\nParties also recruit political leaders. Many leaders begin their public life through party organisations, student wings or local committees. However, parties can also create problems. Corruption, money power, defection, family control and weak internal democracy reduce public trust.\n\nIn Mizoram and other states, political parties play a major role in development, welfare schemes, identity politics and governance. Therefore, parties must be transparent, accountable and responsive to the people. Healthy political parties are necessary for healthy democracy."
      }
    ]
  },
  {
    "name": "History",
    "shortNotes": [
      {
        "title": "Meaning of History",
        "body": "History is the study of past human society, events, culture, economy and politics."
      },
      {
        "title": "Sources of History",
        "body": "Historical sources include written records, oral traditions, coins, monuments and archaeological remains."
      },
      {
        "title": "Colonialism",
        "body": "Colonialism means control of one country by another for political and economic exploitation."
      },
      {
        "title": "National Movement",
        "body": "The Indian National Movement was the struggle against British rule for independence."
      },
      {
        "title": "Mizoram Peace Accord",
        "body": "The Mizoram Peace Accord of 1986 ended insurgency and brought peace to Mizoram."
      }
    ],
    "longNotes": [
      {
        "title": "Importance of History",
        "body": "History is important because it helps people understand the past and its connection with the present. It studies political events, social life, economy, culture, movements, wars and institutions. No society can fully understand itself without knowing how it developed over time. History gives memory to society and direction to future generations.\n\nHistory also teaches lessons from past successes and failures. By studying historical mistakes, people can avoid repeating them. It develops critical thinking because historians must examine evidence, compare sources and avoid blind assumptions. This makes history different from simple storytelling.\n\nFor Mizoram students, history is especially important because it explains migration, traditional chieftainship, British contact, missionary influence, education, insurgency, the Peace Accord and statehood. These events shaped modern Mizoram.\n\nHistory also protects identity. A community that forgets its history may lose its cultural confidence. Therefore, history is not only about dates and kings. It is a serious study of human experience, social change and collective memory."
      },
      {
        "title": "Sources of History",
        "body": "Sources of history are materials used to reconstruct the past. They may be written, oral, archaeological or material sources. Written sources include books, letters, government records, newspapers, inscriptions and official documents. These help historians understand events, rulers, policies and social life.\n\nArchaeological sources include tools, coins, pottery, monuments, burial sites and remains of old settlements. These sources are important for periods where written records are limited. Material objects can reveal information about technology, trade, food habits and culture.\n\nOral tradition is very important in tribal societies. Many communities preserve their past through songs, legends, stories, clan memories and folk narratives. In Mizoram, oral traditions help explain migration, clan history and traditional society.\n\nHowever, every historical source must be examined carefully. Sources may contain bias, exaggeration or incomplete information. A good historian compares different sources before forming conclusions. Therefore, sources are the foundation of historical knowledge."
      },
      {
        "title": "British Colonial Rule in India",
        "body": "British colonial rule in India began through trade but gradually became political control. The East India Company entered India for commercial purposes, but after gaining military and political power, it controlled large territories. The Battle of Plassey in 1757 was a major turning point in the growth of British power.\n\nColonial rule changed India’s economy and society. The British introduced railways, modern education, courts and administrative systems, but these were mainly designed to serve colonial interests. Indian industries declined, farmers suffered from heavy taxation and wealth was drained from India.\n\nAt the same time, colonial rule created new political awareness. Modern education, newspapers and associations helped Indians understand ideas of rights, nationalism and self-government. Educated Indians began to question foreign rule and organise politically.\n\nTherefore, British colonial rule was exploitative but historically important. It damaged India’s economy and society, but it also created conditions that led to the rise of Indian nationalism and the freedom movement."
      },
      {
        "title": "Role of Mahatma Gandhi in the Freedom Movement",
        "body": "Mahatma Gandhi played a central role in the Indian freedom movement. He introduced non-violence, satyagraha and civil disobedience as methods of political struggle. Gandhi believed that unjust laws should be resisted peacefully but firmly. This gave the freedom movement a strong moral foundation.\n\nGandhi led major movements such as the Non-Cooperation Movement, Civil Disobedience Movement and Quit India Movement. These movements brought ordinary people into politics. Farmers, workers, women, students and villagers became active participants in the struggle for independence.\n\nGandhi also promoted swadeshi, khadi, village industries and social reform. He opposed untouchability and encouraged unity among different religious communities. His leadership transformed nationalism from an elite movement into a mass movement.\n\nAlthough some leaders disagreed with his methods, Gandhi’s contribution remains very important. He gave moral strength to India’s struggle and inspired anti-colonial movements across the world. His role made the Indian freedom movement unique."
      },
      {
        "title": "Significance of the Mizoram Peace Accord",
        "body": "The Mizoram Peace Accord was signed on 30 June 1986 between the Government of India and the Mizo National Front. It ended nearly two decades of insurgency and violence in Mizoram. The Accord is one of the most important events in modern Mizo history.\n\nIts main significance was the restoration of peace. After years of conflict, people were able to return to normal life. Former underground leaders entered democratic politics, and the state moved toward constitutional governance. This showed that negotiation could solve serious political conflict.\n\nAnother major result was the granting of full statehood to Mizoram in 1987. Statehood gave Mizoram greater political recognition and administrative power within the Indian Union. It also strengthened democratic institutions.\n\nThe Peace Accord is often considered one of the most successful peace agreements in India. It shows that compromise, dialogue and trust can bring long-term stability. For Mizoram, it remains a turning point from conflict to peace and development."
      }
    ]
  },
  {
    "name": "Economics",
    "shortNotes": [
      {
        "title": "Meaning of Economics",
        "body": "Economics studies how people use limited resources to satisfy unlimited wants."
      },
      {
        "title": "Demand",
        "body": "Demand means the quantity people are willing and able to buy."
      },
      {
        "title": "Supply",
        "body": "Supply means the quantity producers are willing to sell."
      },
      {
        "title": "Inflation",
        "body": "Inflation means a continuous rise in the general price level."
      },
      {
        "title": "Development",
        "body": "Development means improvement in income, health, education and living standards."
      }
    ],
    "longNotes": [
      {
        "title": "Meaning and Scope of Economics",
        "body": "Economics is the study of how human beings use limited resources to satisfy unlimited wants. Since resources such as land, labour, capital and money are limited, people must make choices. Economics studies these choices and explains how individuals, firms and governments make economic decisions.\n\nThe scope of economics includes production, consumption, distribution and exchange. It also studies demand, supply, price, money, banking, inflation, unemployment and development. Microeconomics focuses on individual consumers and firms, while macroeconomics studies the whole economy.\n\nFor Mizoram, economics is useful for understanding unemployment, agriculture, market problems, state finance, infrastructure and dependence on central funds. It also helps explain why local production, entrepreneurship and better connectivity are important. Therefore, economics is not only a theoretical subject; it is a practical tool for understanding development problems."
      },
      {
        "title": "Law of Demand",
        "body": "The law of demand states that when the price of a commodity rises, demand falls, and when price falls, demand rises, other things remaining constant. It shows an inverse relationship between price and quantity demanded.\n\nFor example, if the price of a product increases, consumers may reduce consumption or search for cheaper alternatives. If the price falls, more people may buy it. This law is based on normal consumer behaviour because people usually prefer to buy more when goods are cheaper.\n\nHowever, there are exceptions. Essential goods, prestige goods and addictive goods may not always follow the law strictly. In spite of these exceptions, the law of demand remains one of the basic principles of economics. It helps explain market behaviour, price changes and consumer choices."
      },
      {
        "title": "Inflation and its Effects",
        "body": "Inflation means a continuous rise in the general price level. When inflation occurs, the value of money falls and people can buy fewer goods with the same income. It affects daily life because food, transport, rent and other basic needs become more expensive.\n\nInflation affects poor people and fixed-income groups more seriously because they spend most of their income on essentials. Workers may demand higher wages, while businesses may face rising production costs. High inflation can reduce savings and create economic uncertainty.\n\nInflation may be caused by excess demand, increase in production cost, shortage of goods or increase in money supply. Governments control inflation through monetary policy, fiscal policy and supply management. Mild inflation may support production, but high inflation harms economic stability and public welfare."
      },
      {
        "title": "Unemployment in India",
        "body": "Unemployment means a situation where people who are willing and able to work cannot find suitable employment. India faces different types of unemployment such as educated unemployment, seasonal unemployment and disguised unemployment. It is both an economic and social problem.\n\nThe causes include population growth, slow industrialisation, lack of skills, poor private sector growth and mismatch between education and jobs. In Mizoram, educated unemployment is serious because many youths depend on government jobs, but vacancies are limited.\n\nSolutions include skill development, entrepreneurship, tourism, agriculture-based industries, digital work and better infrastructure. Employment generation is necessary for social stability, youth confidence and economic development. A society with many unemployed educated youths can face frustration and political dissatisfaction."
      },
      {
        "title": "Economic Development in Mizoram",
        "body": "Economic development in Mizoram means improvement in income, employment, infrastructure, education, health and quality of life. Mizoram has high literacy and social peace, but it faces major development challenges. Hilly terrain, weak connectivity, small markets and dependence on central funds limit growth.\n\nThe state has potential in tourism, bamboo, handloom, horticulture, border trade, local food products and small industries. Youth entrepreneurship can also become an important source of development if supported by finance, training and market access.\n\nFor real development, Mizoram needs transparent governance, better roads, digital infrastructure, reliable power and local production. Development should not destroy culture or the environment. A balanced model must combine economic growth with sustainability, accountability and protection of community identity."
      }
    ]
  },
  {
    "name": "Sociology",
    "shortNotes": [
      {
        "title": "Meaning of Sociology",
        "body": "Sociology is the scientific study of society and social relationships."
      },
      {
        "title": "Society",
        "body": "Society is a network of social relationships among people."
      },
      {
        "title": "Culture",
        "body": "Culture includes beliefs, customs, values, language and way of life."
      },
      {
        "title": "Social Change",
        "body": "Social change means transformation in social institutions and behaviour."
      },
      {
        "title": "Socialisation",
        "body": "Socialisation is the process through which individuals learn social values."
      }
    ],
    "longNotes": [
      {
        "title": "Meaning and Scope of Sociology",
        "body": "Meaning and Scope of Sociology is an important topic in Sociology because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, meaning and scope of sociology can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, meaning and scope of sociology should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Society and Community",
        "body": "Society and Community is an important topic in Sociology because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, society and community can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, society and community should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Social Change",
        "body": "Social Change is an important topic in Sociology because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, social change can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, social change should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Culture and Socialisation",
        "body": "Culture and Socialisation is an important topic in Sociology because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, culture and socialisation can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, culture and socialisation should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Tribal Society in Mizoram",
        "body": "Tribal Society in Mizoram is an important topic in Sociology because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, tribal society in mizoram can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, tribal society in mizoram should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      }
    ]
  },
  {
    "name": "Public Administration",
    "shortNotes": [
      {
        "title": "Meaning",
        "body": "Public Administration implements government policies and manages public services."
      },
      {
        "title": "Governance",
        "body": "Governance means the process of decision-making and implementation."
      },
      {
        "title": "Bureaucracy",
        "body": "Bureaucracy is the permanent administrative machinery of the state."
      },
      {
        "title": "Accountability",
        "body": "Accountability means officials must answer for their actions."
      },
      {
        "title": "E-Governance",
        "body": "E-governance uses digital tools to improve public services."
      }
    ],
    "longNotes": [
      {
        "title": "Meaning of Public Administration",
        "body": "Meaning of Public Administration is an important topic in Public Administration because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, meaning of public administration can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, meaning of public administration should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Principles of Good Governance",
        "body": "Principles of Good Governance is an important topic in Public Administration because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, principles of good governance can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, principles of good governance should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Bureaucracy in India",
        "body": "Bureaucracy in India is an important topic in Public Administration because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, bureaucracy in india can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, bureaucracy in india should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "E-Governance",
        "body": "E-Governance is an important topic in Public Administration because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, e-governance can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, e-governance should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "District Administration",
        "body": "District Administration is an important topic in Public Administration because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, district administration can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, district administration should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      }
    ]
  },
  {
    "name": "English",
    "shortNotes": [
      {
        "title": "English Language",
        "body": "English is a global language used in education, administration and communication."
      },
      {
        "title": "Essay",
        "body": "An essay is an organised written composition on a topic."
      },
      {
        "title": "Comprehension",
        "body": "Comprehension means understanding and interpreting a passage."
      },
      {
        "title": "Grammar",
        "body": "Grammar provides rules for correct use of language."
      },
      {
        "title": "Precis",
        "body": "Precis writing means shortening a passage without losing the main idea."
      }
    ],
    "longNotes": [
      {
        "title": "Importance of English Language",
        "body": "Importance of English Language is an important topic in English because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, importance of english language can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, importance of english language should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Essay Writing",
        "body": "Essay Writing is an important topic in English because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, essay writing can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, essay writing should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Comprehension Skills",
        "body": "Comprehension Skills is an important topic in English because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, comprehension skills can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, comprehension skills should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Precis Writing",
        "body": "Precis Writing is an important topic in English because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, precis writing can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, precis writing should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Grammar and Communication",
        "body": "Grammar and Communication is an important topic in English because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, grammar and communication can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, grammar and communication should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      }
    ]
  },
  {
    "name": "Geography",
    "shortNotes": [
      {
        "title": "Meaning of Geography",
        "body": "Geography studies the earth, environment, people and places."
      },
      {
        "title": "Climate",
        "body": "Climate means the average weather condition of a place over time."
      },
      {
        "title": "Resources",
        "body": "Resources are useful materials found in nature or created by humans."
      },
      {
        "title": "Population",
        "body": "Population geography studies distribution and characteristics of people."
      },
      {
        "title": "Environment",
        "body": "Environment includes natural and human surroundings."
      }
    ],
    "longNotes": [
      {
        "title": "Physical Geography of Mizoram",
        "body": "Physical Geography of Mizoram is an important topic in Geography because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, physical geography of mizoram can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, physical geography of mizoram should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Climate and Monsoon",
        "body": "Climate and Monsoon is an important topic in Geography because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, climate and monsoon can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, climate and monsoon should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Natural Resources",
        "body": "Natural Resources is an important topic in Geography because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, natural resources can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, natural resources should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Human Geography",
        "body": "Human Geography is an important topic in Geography because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, human geography can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, human geography should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Environmental Problems in Hills",
        "body": "Environmental Problems in Hills is an important topic in Geography because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, environmental problems in hills can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, environmental problems in hills should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      }
    ]
  },
  {
    "name": "Education",
    "shortNotes": [
      {
        "title": "Meaning of Education",
        "body": "Education is the process of learning knowledge, skills, values and behaviour."
      },
      {
        "title": "Aims",
        "body": "Aims of education include knowledge, character, citizenship and development."
      },
      {
        "title": "Teacher",
        "body": "A teacher guides learning and shapes student development."
      },
      {
        "title": "Curriculum",
        "body": "Curriculum means planned learning experiences provided by institutions."
      },
      {
        "title": "Value Education",
        "body": "Value education teaches morality, discipline and responsible behaviour."
      }
    ],
    "longNotes": [
      {
        "title": "Meaning and Aims of Education",
        "body": "Meaning and Aims of Education is an important topic in Education because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, meaning and aims of education can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, meaning and aims of education should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Role of Education in Society",
        "body": "Role of Education in Society is an important topic in Education because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, role of education in society can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, role of education in society should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Teacher and Classroom Management",
        "body": "Teacher and Classroom Management is an important topic in Education because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, teacher and classroom management can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, teacher and classroom management should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Value Education",
        "body": "Value Education is an important topic in Education because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, value education can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, value education should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Education in Mizoram",
        "body": "Education in Mizoram is an important topic in Education because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, education in mizoram can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, education in mizoram should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      }
    ]
  },
  {
    "name": "Environmental Studies",
    "shortNotes": [
      {
        "title": "Environment",
        "body": "Environment means the natural and human surroundings of life."
      },
      {
        "title": "Biodiversity",
        "body": "Biodiversity means variety of plants, animals and microorganisms."
      },
      {
        "title": "Pollution",
        "body": "Pollution means contamination of air, water, soil or environment."
      },
      {
        "title": "Climate Change",
        "body": "Climate change means long-term change in temperature and weather patterns."
      },
      {
        "title": "Sustainable Development",
        "body": "Sustainable development meets present needs without harming future generations."
      }
    ],
    "longNotes": [
      {
        "title": "Meaning of Environment",
        "body": "Meaning of Environment is an important topic in Environmental Studies because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, meaning of environment can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, meaning of environment should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Biodiversity Conservation",
        "body": "Biodiversity Conservation is an important topic in Environmental Studies because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, biodiversity conservation can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, biodiversity conservation should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Climate Change",
        "body": "Climate Change is an important topic in Environmental Studies because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, climate change can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, climate change should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Sustainable Development",
        "body": "Sustainable Development is an important topic in Environmental Studies because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, sustainable development can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, sustainable development should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      },
      {
        "title": "Waste Management",
        "body": "Waste Management is an important topic in Environmental Studies because it helps students understand society, governance and development in a practical way. It gives a clear foundation for examinations and also connects classroom learning with real-life issues. A good answer should begin with meaning, then explain features, importance and examples.\n\nIn the Indian context, this topic is connected with public life, institutions, social change and citizen responsibility. Students should not write only definitions. They should explain why the topic matters and how it affects people. Examples from Mizoram, Northeast India and daily life can make the answer stronger.\n\nFor Mizoram students, waste management can be linked with local society, education, administration, environment, youth problems and development needs. This makes the answer more original and suitable for college-level and competitive examinations.\n\nTherefore, waste management should be studied not as a memorised paragraph but as a concept that helps explain real problems. A balanced answer should be simple, clear and analytical."
      }
    ]
  }
];

export default function CollegeNotesPage() {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0].name);
  const [search, setSearch] = useState("");

  const subject = useMemo(() => {
    return subjects.find((item) => item.name === selectedSubject) ?? subjects[0];
  }, [selectedSubject]);

  const filteredLongNotes = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return subject.longNotes;
    return subject.longNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(term) ||
        note.body.toLowerCase().includes(term)
    );
  }, [search, subject]);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 rounded-3xl border border-cyan-400/40 bg-slate-900 p-6 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Mizoram Arts College Notes
          </p>

          <h1 className="mt-3 text-4xl font-bold text-cyan-300 md:text-6xl">
            Free Study Notes
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            Simple English notes for Mizoram students. Each subject has short
            notes and five long exam-style notes for quick revision.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/10"
            >
              Back to Mock Test
            </Link>
          </div>
        </section>

        <section className="mb-6 flex flex-wrap gap-3">
          {subjects.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelectedSubject(item.name)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                selectedSubject === item.name
                  ? "bg-cyan-400 text-slate-950"
                  : "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
              }`}
            >
              {item.name}
            </button>
          ))}
        </section>

        <section className="mb-6 rounded-3xl border border-cyan-400/30 bg-slate-900 p-5">
          <label className="text-sm font-semibold text-cyan-300">
            Search inside {subject.name}
          </label>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search title or keyword..."
            className="mt-3 w-full rounded-2xl border border-cyan-400/40 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-cyan-300"
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-cyan-400/40 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-cyan-300">Short Notes</h2>
            <div className="mt-5 space-y-4">
              {subject.shortNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-2xl border border-cyan-400/20 bg-slate-950 p-4"
                >
                  <h3 className="font-bold text-white">{note.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {note.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/40 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-cyan-300">
              Long Notes: {subject.name}
            </h2>

            <div className="mt-5 space-y-5">
              {filteredLongNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-2xl border border-cyan-400/20 bg-slate-950 p-5"
                >
                  <h3 className="text-xl font-bold text-white">{note.title}</h3>
                  <p className="mt-3 whitespace-pre-line leading-7 text-slate-300">
                    {note.body}
                  </p>
                </article>
              ))}

              {filteredLongNotes.length === 0 && (
                <p className="rounded-2xl border border-red-400/40 bg-red-400/10 p-4 text-red-200">
                  No note found for this search.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
