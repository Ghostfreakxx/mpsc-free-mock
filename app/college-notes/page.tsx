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
    name: "Political Science",
    shortNotes: [
      {
        title: "Political Science",
        body: "Political Science is the study of the state, government, power, law, rights, duties, political ideas and political behaviour.",
      },
      {
        title: "Sovereignty",
        body: "Sovereignty means the supreme power of the state to make and enforce laws within its territory without external control.",
      },
      {
        title: "Democracy",
        body: "Democracy is a system of government in which people participate directly or indirectly through elected representatives.",
      },
      {
        title: "Federalism",
        body: "Federalism divides power between the Union and State governments while maintaining national unity.",
      },
      {
        title: "Political Ideology",
        body: "Political ideology is a set of ideas about power, society, economy, rights and the role of the state.",
      },
    ],
    longNotes: [
      {
        title: "Plato's Theory of Justice",
        body: `Plato's theory of justice is explained in his famous book The Republic. For Plato, justice is not merely a legal idea but a moral and social principle. He believed that justice exists when every individual and every class performs its proper function without interfering in the work of others.

Plato divided society into three classes: rulers, auxiliaries and producers. The rulers should possess wisdom, the auxiliaries should possess courage, and the producers should practice moderation. Justice appears when these three classes work harmoniously under the guidance of philosopher-kings.

The theory is important because it connects individual morality with political order. A just state, according to Plato, is possible only when reason controls desire and courage supports reason. However, Plato's theory is criticised for being too idealistic, anti-democratic and supportive of strict class division. Still, it remains one of the foundational discussions in Western political thought.`,
      },
      {
        title: "Aristotle's Classification of Constitutions",
        body: `Aristotle is known as the Father of Political Science because he studied politics in a systematic and comparative manner. In his work Politics, he classified constitutions based on two criteria: the number of rulers and the purpose of rule.

If one person rules for the common good, it is monarchy. If a few rule for the common good, it is aristocracy. If many rule for the common good, it is polity. These are considered good forms of government. But when these forms become selfish, they degenerate into tyranny, oligarchy and democracy respectively.

Aristotle preferred polity because it combined the strengths of democracy and oligarchy and promoted the rule of the middle class. His classification is important because it shows that the quality of government depends not only on who rules but also on whose interest is served. Even today, his ideas help students understand constitutional forms, public interest and political stability.`,
      },
      {
        title: "Social Contract Theory",
        body: `Social contract theory explains the origin of the state through an agreement among individuals. The major thinkers of this theory are Thomas Hobbes, John Locke and Jean-Jacques Rousseau. They all believed that before political society, human beings lived in a state of nature, but they differed in their interpretation of that condition.

Hobbes saw the state of nature as violent and insecure. Therefore, people created an absolute sovereign for protection. Locke believed the state of nature had natural rights, but government was needed to protect life, liberty and property. Rousseau argued that the social contract should express the general will of the people.

The theory is important because it explains political authority as based on consent rather than divine right. It influenced liberalism, democracy, constitutional government and modern ideas of citizenship. However, critics argue that no actual historical contract ever existed. Still, the theory remains central to political thought because it connects state power with legitimacy and consent.`,
      },
      {
        title: "Federalism in India",
        body: `Federalism is a system of government in which powers are divided between the central government and regional governments. India follows a federal system with a strong Centre. The Constitution divides subjects into the Union List, State List and Concurrent List.

Indian federalism is necessary because India is socially, culturally, linguistically and geographically diverse. State governments are closer to local problems and can address issues such as health, agriculture, land, education and local development more effectively. At the same time, the Union government handles defence, foreign affairs, currency and national planning.

However, Indian federalism also contains unitary features. During emergencies, the Centre becomes more powerful. The Governor's role, financial dependence of states and centrally sponsored schemes often create tension between Centre and State. For Mizoram, federalism is especially important because it protects regional identity, land rights, culture and local governance. Therefore, Indian federalism is best understood as a balance between national unity and regional autonomy.`,
      },
      {
        title: "Political Parties in Democracy",
        body: `Political parties are organised groups that seek political power through elections. They are essential to representative democracy because citizens cannot directly govern large modern states. Parties present policies, select candidates, contest elections, form governments and organise opposition.

Political parties also perform the function of political education. They simplify public issues, mobilise voters and connect the government with society. In parliamentary democracy, the ruling party forms the government, while the opposition monitors, criticises and provides alternatives.

However, parties can also weaken democracy when they become corrupt, family-controlled, money-driven or based on narrow identity politics. Defection, criminalisation of politics and weak internal democracy reduce public trust. In Mizoram, parties play a major role in welfare schemes, development promises, church influence, youth politics and state-centre relations.

A healthy democracy needs strong but accountable political parties. Without parties, elections may exist, but organised democratic choice becomes difficult.`,
      },
    ],
  },

  {
    name: "History",
    shortNotes: [
      {
        title: "History",
        body: "History is the study of human society in the past through evidence, sources and interpretation.",
      },
      {
        title: "Historical Sources",
        body: "Sources of history include written records, oral traditions, monuments, coins, inscriptions and archaeological remains.",
      },
      {
        title: "Colonialism",
        body: "Colonialism is the political and economic domination of one country by another.",
      },
      {
        title: "Nationalism",
        body: "Nationalism is a sense of common identity and political unity among people.",
      },
      {
        title: "Mizoram Peace Accord",
        body: "The Mizoram Peace Accord of 1986 ended insurgency and created the foundation for statehood in 1987.",
      },
    ],
    longNotes: [
      {
        title: "Importance of History",
        body: `History is important because it gives society memory, identity and direction. It studies the political, social, cultural and economic experiences of human beings. History is not only about kings, wars and dates; it is about how societies change over time.

A serious study of history teaches students to examine evidence and avoid blind belief. Historians use sources such as official records, oral traditions, inscriptions, monuments, newspapers and archaeological findings. By comparing sources, they reconstruct the past and interpret events.

For Mizoram students, history is especially important because it explains migration, chieftainship, British contact, missionary influence, education, insurgency, Peace Accord and statehood. These events shaped modern Mizo society.

History also helps people understand present problems. Issues such as identity, land, autonomy, religion, governance and development cannot be understood without historical background. Therefore, history is both an academic discipline and a tool for social self-understanding.`,
      },
      {
        title: "British Colonial Rule in India",
        body: `British colonial rule in India began through trade but gradually became political domination. The East India Company first entered India for commerce, but after the Battle of Plassey in 1757, British power expanded rapidly.

Colonialism changed India's economy, administration and society. The British introduced railways, modern education, courts and bureaucracy, but these were mainly designed to serve colonial interests. Indian industries declined, agriculture was exploited through revenue systems, and wealth was drained from India.

At the same time, colonial rule unintentionally created modern political consciousness. English education, newspapers, legal reforms and new associations helped Indians learn about rights, liberty and nationalism. Educated Indians began to question foreign rule and demand self-government.

Thus, colonialism had a dual character. It modernised certain institutions but exploited India's resources and people. The contradiction between British claims of civilisation and the reality of exploitation gave rise to the Indian national movement.`,
      },
      {
        title: "Revolt of 1857",
        body: `The Revolt of 1857 was one of the earliest major challenges to British rule in India. It began among sepoys at Meerut and spread to Delhi, Kanpur, Lucknow, Jhansi and other areas. The immediate cause was the issue of greased cartridges, but the deeper causes were political, economic, military and social.

Indian rulers were angered by British annexation policies, especially the Doctrine of Lapse. Peasants suffered from heavy revenue demands. Soldiers faced discrimination in pay, promotion and service conditions. Many Indians also feared interference with religion and tradition.

The revolt failed because it lacked central leadership, modern weapons and a common national programme. Some regions and communities did not participate. Still, it was historically significant because it shook British confidence and ended Company rule. After 1858, India came directly under the British Crown.

The Revolt of 1857 is interpreted differently. Some call it a sepoy mutiny, while others see it as the First War of Independence.`,
      },
      {
        title: "Gandhi and the Indian National Movement",
        body: `Mahatma Gandhi transformed the Indian national movement from an elite political movement into a mass movement. His methods included satyagraha, non-violence, non-cooperation, civil disobedience and constructive work.

Gandhi believed that political struggle should have moral force. He led major movements such as the Non-Cooperation Movement, Civil Disobedience Movement and Quit India Movement. These movements brought peasants, workers, women, students and ordinary citizens into national politics.

Gandhi also promoted swadeshi, khadi, village industries, Hindu-Muslim unity and the removal of untouchability. His politics was not limited to freedom from British rule; it also aimed at moral and social reform.

However, Gandhi was criticised by revolutionaries, socialists and Ambedkarite thinkers for different reasons. Some felt his methods were slow, while others disagreed with his views on caste and economy. Yet his contribution remains central because he gave the freedom movement mass participation, moral legitimacy and international recognition.`,
      },
      {
        title: "Mizoram Peace Accord",
        body: `The Mizoram Peace Accord was signed on 30 June 1986 between the Government of India and the Mizo National Front. It ended nearly two decades of insurgency and is considered one of the most successful peace agreements in India.

The Accord was significant because it transformed armed conflict into democratic politics. Former underground leaders entered constitutional politics, and peace returned to society. It also paved the way for Mizoram to become a full-fledged state in 1987.

The Accord shows the importance of negotiation, compromise and political trust. Instead of continuing military confrontation, both sides accepted a constitutional solution. For Mizoram, it created stability, allowed development and strengthened democratic institutions.

However, peace did not automatically solve every problem. Mizoram still faces issues of unemployment, fiscal dependence, infrastructure weakness and border concerns. Still, the Peace Accord remains a turning point because it moved Mizoram from conflict to constitutional governance and peaceful political competition.`,
      },
    ],
  },

  {
    name: "Economics",
    shortNotes: [
      {
        title: "Economics",
        body: "Economics studies how people use scarce resources to satisfy unlimited wants.",
      },
      {
        title: "Demand",
        body: "Demand is the quantity of a commodity that consumers are willing and able to buy at a given price.",
      },
      {
        title: "Inflation",
        body: "Inflation means a sustained rise in the general price level of goods and services.",
      },
      {
        title: "GDP",
        body: "GDP measures the total value of final goods and services produced within a country in a year.",
      },
      {
        title: "Development",
        body: "Development means improvement in income, education, health, employment and quality of life.",
      },
    ],
    longNotes: [
      {
        title: "Nature and Scope of Economics",
        body: `Economics is the study of how individuals, firms and governments make choices under conditions of scarcity. Human wants are unlimited, but resources such as land, labour, capital and time are limited. Therefore, every society must decide what to produce, how to produce and for whom to produce.

The scope of economics includes production, consumption, distribution, exchange, money, banking, public finance, trade, inflation, unemployment and development. Microeconomics studies individual consumers, firms and markets. Macroeconomics studies the economy as a whole, including national income, inflation, employment and growth.

Economics is not only about money. It is also about choice, welfare and resource allocation. For Mizoram, economics helps explain unemployment, market prices, state finances, agriculture, tourism, infrastructure, entrepreneurship and dependence on central grants.

A proper understanding of economics helps students analyse public policy and development problems instead of simply memorising definitions.`,
      },
      {
        title: "Law of Demand",
        body: `The law of demand states that, other things remaining constant, when the price of a commodity rises, demand falls, and when price falls, demand rises. This shows an inverse relationship between price and quantity demanded.

The law is based on normal consumer behaviour. When goods become expensive, consumers may reduce consumption, postpone purchase or shift to substitutes. When price falls, more consumers are willing to buy.

The law of demand is useful for understanding market behaviour, pricing and consumer choice. It also helps governments and businesses predict how people may respond to price changes.

However, the law has exceptions. Prestige goods, essential goods, addictive goods and goods affected by expectations may not always follow the normal pattern. For example, people may still buy medicines even if prices rise. Despite exceptions, the law of demand remains one of the most basic principles of economics because it explains how price influences human choice.`,
      },
      {
        title: "Inflation and its Effects",
        body: `Inflation means a sustained increase in the general price level. When inflation rises, the purchasing power of money falls. People need more money to buy the same goods and services.

Inflation affects different sections of society differently. Poor people and fixed-income groups suffer more because they spend a large part of their income on essentials. Workers demand higher wages, businesses face higher production costs and savings may lose value.

The causes of inflation include excess demand, shortage of supply, increase in production cost, rise in fuel prices, government borrowing and expansion of money supply. Inflation can be controlled through monetary policy, fiscal policy, supply management and price stabilisation.

Mild inflation may encourage production, but high inflation creates uncertainty and social pressure. In states like Mizoram, inflation is strongly felt because many goods are imported from outside the state and transport costs are high.`,
      },
      {
        title: "Unemployment in India",
        body: `Unemployment exists when people who are willing and able to work cannot find suitable jobs. In India, unemployment appears in different forms such as educated unemployment, seasonal unemployment, disguised unemployment and structural unemployment.

Educated unemployment is serious because many young people complete degrees but lack suitable jobs or practical skills. In Mizoram, this problem is visible in the strong dependence on government employment. When government vacancies are limited, educated youths face frustration and insecurity.

The causes of unemployment include population growth, slow industrialisation, lack of skills, weak private sector, poor infrastructure and mismatch between education and labour market needs.

Solutions require skill development, entrepreneurship, small industries, tourism, agriculture-based processing, digital work and better connectivity. Employment is not only an economic issue; it also affects dignity, family life, social stability and political confidence. Therefore, employment generation must be central to development policy.`,
      },
      {
        title: "Economic Development in Mizoram",
        body: `Economic development in Mizoram means improvement in income, employment, infrastructure, education, health and quality of life. Mizoram has high literacy and social peace, but it faces structural economic challenges.

The state's hilly terrain, weak connectivity, small market size, limited industrial base and dependence on central funds restrict rapid growth. Many essential goods come from outside, increasing transport cost and market prices. Educated unemployment is also a major challenge.

However, Mizoram has strong potential in tourism, bamboo, horticulture, handloom, organic farming, local food processing, border trade and digital services. Youth entrepreneurship can become an important driver if supported by credit, training and market access.

Development in Mizoram must be sustainable and culturally sensitive. It should not destroy land, community values or the environment. A good development model must combine infrastructure, local production, transparent governance, skill training and protection of Mizo identity.`,
      },
    ],
  },

  {
    name: "Sociology",
    shortNotes: [
      {
        title: "Sociology",
        body: "Sociology is the scientific study of society, social relationships, institutions and social change.",
      },
      {
        title: "Society",
        body: "Society is a network of social relationships among individuals and groups.",
      },
      {
        title: "Culture",
        body: "Culture includes beliefs, customs, values, language, symbols and ways of life.",
      },
      {
        title: "Socialisation",
        body: "Socialisation is the process through which individuals learn social norms, values and behaviour.",
      },
      {
        title: "Social Stratification",
        body: "Social stratification means the division of society into unequal layers based on class, caste, status or power.",
      },
    ],
    longNotes: [
      {
        title: "Nature and Scope of Sociology",
        body: `Sociology is the scientific study of society, social relationships, institutions and patterns of human behaviour. It studies how people live together, how groups are formed and how social order and change take place.

The scope of sociology includes family, religion, education, economy, politics, culture, social stratification, gender, tribe, urbanisation, modernisation and social change. It does not study individuals in isolation but examines them as members of society.

Sociology is useful because many problems are social in nature. Poverty, unemployment, crime, inequality, migration, addiction and conflict cannot be understood only at the individual level. They must be analysed in relation to social structure and institutions.

For Mizoram, sociology helps explain tribal society, church influence, family change, youth culture, migration, education, identity and modernisation. It allows students to understand society critically instead of accepting every custom or problem as natural.`,
      },
      {
        title: "Culture and Society",
        body: `Culture is the total way of life of a society. It includes language, beliefs, customs, values, dress, food habits, religion, art and moral codes. Society is the network of relationships among people, while culture provides meaning to those relationships.

Culture is learned, shared and transmitted from one generation to another. It shapes how people think, behave and judge right and wrong. Without culture, social life would lack order and continuity.

In Mizoram, culture is visible in language, community life, church participation, festivals, music, respect for elders and traditional values such as tlawmngaihna. However, culture is not static. Education, social media, migration, markets and global culture are changing Mizo society.

Sociologically, culture must be studied critically. Some cultural practices strengthen solidarity, while others may limit individual freedom or development. Therefore, culture should be respected but also examined in relation to equality, progress and human dignity.`,
      },
      {
        title: "Socialisation",
        body: `Socialisation is the process through which individuals learn the values, norms, language, behaviour and roles of society. A human child is not born social; society makes the child a social being through learning and interaction.

The major agencies of socialisation are family, school, peer group, religion, media and community. Family teaches basic language, discipline and emotional values. School teaches formal knowledge, citizenship and competition. Peer groups shape identity and behaviour, especially among youths. Religion and media also strongly influence values.

Socialisation is important because it maintains social order. It teaches people how to behave as children, students, citizens, workers and family members. However, socialisation can also reproduce inequality, gender roles, blind obedience and social prejudice.

In Mizoram, family, church, school and community have strong roles in socialisation. Today, social media has become a powerful new agency, shaping youth behaviour, language, aspirations and political awareness.`,
      },
      {
        title: "Social Change",
        body: `Social change means transformation in social structure, institutions, values and behaviour over time. No society remains completely unchanged. Change may be slow or rapid, peaceful or conflictual, planned or unplanned.

The causes of social change include education, technology, migration, economic development, political reform, religion, media and social movements. Modern communication has made change faster because ideas spread quickly through phones, internet and social media.

In Mizoram, social change can be seen in education, family structure, youth culture, women's participation, political awareness, church influence, urbanisation and digital life. Traditional village-based life is increasingly connected with global culture and modern aspirations.

Social change has both positive and negative effects. It can bring education, equality and development, but it can also create identity crisis, unemployment pressure, moral confusion and generational conflict. Therefore, sociology studies not only change itself but also its direction, causes and consequences.`,
      },
      {
        title: "Tribal Society in Mizoram",
        body: `Tribal society in Mizoram has historically been based on kinship, clan identity, village life, customary practices and community solidarity. Before modern administration, traditional chieftainship played an important role in political and social organisation.

Missionary influence, education and Christianity transformed Mizo society in major ways. Literacy increased, new institutions emerged and many older customs changed. The church became a central social institution, influencing morality, community life and even politics.

Modern tribal society in Mizoram is not isolated. It is shaped by state politics, constitutional protection, migration, education, employment, social media and global culture. Youths are more connected to outside opportunities but also face unemployment and identity pressure.

Sociologically, Mizoram shows how tribal society can modernise without completely losing identity. However, challenges remain: class inequality, corruption, drug abuse, gender issues and dependence on government jobs. A serious study of tribal society must therefore combine tradition, modernity and development.`,
      },
    ],
  },

  {
    name: "Public Administration",
    shortNotes: [
      {
        title: "Public Administration",
        body: "Public Administration is the implementation of government policies and management of public affairs.",
      },
      {
        title: "Bureaucracy",
        body: "Bureaucracy is a permanent administrative system based on hierarchy, rules, specialization and written records.",
      },
      {
        title: "Good Governance",
        body: "Good governance means accountable, transparent, responsive, effective and participatory administration.",
      },
      {
        title: "Accountability",
        body: "Accountability means public officials must answer for their decisions, actions and use of public resources.",
      },
      {
        title: "E-Governance",
        body: "E-governance uses digital technology to improve public service delivery and administrative efficiency.",
      },
    ],
    longNotes: [
      {
        title: "Meaning and Scope of Public Administration",
        body: `Public Administration is the organisation and implementation of government policies. It is concerned with the management of public affairs, public institutions and public services.

The scope of Public Administration includes policy implementation, personnel administration, financial administration, development administration, local governance, welfare programmes, law and order and public service delivery. It connects political decisions with practical action.

Public Administration is important because people experience government mainly through administration. Schools, hospitals, roads, police, welfare schemes, certificates and public utilities depend on administrative efficiency.

In Mizoram, administration is important in areas such as rural development, district governance, border management, disaster response, infrastructure and welfare schemes. Weak administration leads to delay, corruption and public frustration. Strong administration improves trust, development and stability.

Therefore, Public Administration is not just office work. It is the practical machinery through which the state serves society.`,
      },
      {
        title: "Max Weber's Bureaucratic Theory",
        body: `Max Weber developed the ideal type model of bureaucracy. He believed that modern administration should be based on rational-legal authority rather than personal loyalty or tradition.

The main features of bureaucracy are hierarchy, division of work, written rules, official records, technical expertise, impersonality and merit-based recruitment. These features make administration predictable, stable and efficient.

Bureaucracy is important because modern states perform complex functions such as taxation, welfare, law enforcement, education, health and development. Without a trained administrative machinery, government policies cannot be implemented properly.

However, bureaucracy is also criticised for red tape, delay, rigidity, excessive formalism and distance from ordinary people. In India and Mizoram, people often experience bureaucracy through paperwork, approvals and slow procedures.

Weber's theory remains important because it explains the structure of modern administration. But in democratic societies, bureaucracy must be balanced with accountability, transparency, responsiveness and citizen participation.`,
      },
      {
        title: "Good Governance",
        body: `Good governance refers to a system of administration that is transparent, accountable, participatory, responsive, effective and based on rule of law. It focuses not only on government authority but also on the quality of public service delivery.

The major features of good governance include openness in decision-making, control of corruption, respect for law, citizen participation, timely service delivery and protection of rights. A government may have power, but it earns legitimacy only when it governs fairly and efficiently.

Good governance is especially important in developing states because public resources are limited and public needs are high. Misuse of funds, favouritism and delay directly harm ordinary citizens.

In Mizoram, good governance is needed in infrastructure projects, welfare schemes, recruitment, local bodies, education and health services. Digital governance, social audit, RTI and decentralisation can improve accountability.

Therefore, good governance is not an abstract idea. It is the difference between a state that merely rules and a state that genuinely serves people.`,
      },
      {
        title: "Development Administration",
        body: `Development Administration refers to the administrative system designed to promote social and economic development. It became important after independence because newly independent countries needed planned development, poverty reduction and institution building.

Development Administration is different from routine administration. It focuses on change, innovation, welfare, public participation and transformation of society. It includes implementation of development plans, rural development, education, health, infrastructure and poverty alleviation programmes.

In India, development administration operates through central ministries, state governments, district administration, local bodies and special agencies. In Mizoram, it is visible in rural development schemes, road projects, livelihood programmes and welfare initiatives.

However, development administration often faces problems such as corruption, delay, lack of coordination, political interference and weak monitoring. Therefore, development requires not only funds but also capable institutions and honest implementation.

A good development administration must be people-centred, transparent, locally sensitive and result-oriented.`,
      },
      {
        title: "E-Governance and Digital Administration",
        body: `E-governance means the use of information and communication technology in government administration. It aims to make governance faster, more transparent, accessible and citizen-friendly.

Examples of e-governance include online certificates, digital payments, government portals, online grievance systems, digital land records and public information platforms. It reduces paperwork and can limit middlemen and corruption.

However, e-governance is not only about technology. It also requires digital literacy, cyber security, reliable internet, trained officials and trust in digital systems. Without these, digital governance may exclude people who are poor, elderly or digitally unaware.

In Mizoram, e-governance has strong potential because difficult terrain makes physical access to offices costly and time-consuming. But digital services must be supported by awareness, local language support and cyber hygiene.

Therefore, e-governance should be seen as a tool for better administration, not a replacement for accountable human governance.`,
      },
    ],
  },

  {
    name: "English",
    shortNotes: [
      {
        title: "English Language",
        body: "English is an important language for education, administration, employment and wider communication.",
      },
      {
        title: "Essay Writing",
        body: "Essay writing is an organised expression of ideas on a topic with introduction, body and conclusion.",
      },
      {
        title: "Comprehension",
        body: "Comprehension means understanding, interpreting and analysing a written passage.",
      },
      {
        title: "Precis",
        body: "Precis writing means shortening a passage while preserving its main idea and logical flow.",
      },
      {
        title: "Communication",
        body: "Communication is the process of sharing ideas, information and feelings through language or symbols.",
      },
    ],
    longNotes: [
      {
        title: "Importance of English in Higher Education",
        body: `English plays an important role in higher education because many textbooks, journals, research papers and official materials are available in English. For students in India, English functions as a link language across regions and disciplines.

In college education, English improves access to academic knowledge. It helps students read political theory, history, economics, sociology and public administration from wider sources. It is also important for competitive examinations, interviews, research writing and professional communication.

However, English should not be treated as a measure of intelligence. Many students understand concepts well but struggle to express them in English. Therefore, language learning must be supportive rather than humiliating.

For Mizoram students, English has practical value because it connects local education with national and global opportunities. A good command of English can improve academic confidence, employment chances and public communication. The aim should be clear expression, not artificial decoration.`,
      },
      {
        title: "Essay Writing",
        body: `Essay writing is the organised presentation of ideas on a given topic. A good essay has an introduction, body and conclusion. The introduction defines the topic and sets the direction. The body explains the main points with examples. The conclusion summarises the argument and gives a final view.

At college level, an essay should not be a random collection of sentences. It must have logical flow, relevant arguments and balanced analysis. Students should avoid unnecessary repetition and emotional exaggeration.

A strong essay includes definitions, background, causes, effects, examples and criticism where needed. For topics related to Mizoram, students can include examples from local governance, youth issues, education, economy, environment and society.

Essay writing is important because it tests knowledge, reasoning and communication. It teaches students to think in an organised way. In examinations, a clear and structured essay often scores better than a long but confused answer.`,
      },
      {
        title: "Reading Comprehension",
        body: `Reading comprehension means understanding and interpreting a written passage. It is not limited to reading words; it requires grasping the main idea, tone, argument, supporting details and implied meaning.

Good comprehension skills are important in college study because students must read textbooks, articles, notices, reports and examination passages. In competitive exams, comprehension tests the ability to read carefully and answer accurately.

To improve comprehension, students should first identify the central idea of the passage. Then they should notice keywords, examples, contrast words and conclusion markers. Questions should be answered based on the passage, not personal opinion.

Many students make mistakes because they read too fast or assume meaning without evidence. Careful reading is better than guessing. For Mizoram students preparing for MPSC or university exams, comprehension is a scoring area if practised regularly.

Thus, comprehension develops both language ability and critical thinking.`,
      },
      {
        title: "Precis Writing",
        body: `Precis writing is the art of shortening a passage while preserving its main idea. It is not simply cutting sentences; it requires understanding the passage and rewriting it in a concise form.

A good precis should be clear, brief, accurate and logically connected. It should not include personal opinions, examples, repetitions or unnecessary details. The original meaning must be preserved, but the language should be the student's own.

The first step is to read the passage carefully and identify the main idea. The second step is to remove illustrations, repetitions and minor details. The third step is to write a compact version in simple language.

Precis writing is useful because it trains students to think clearly and express ideas economically. In administration, journalism, academic writing and official communication, the ability to summarise is very valuable.

For examinations, students should remember that a precis must be shorter than the original but complete in meaning.`,
      },
      {
        title: "Grammar and Effective Communication",
        body: `Grammar provides the rules that help language become clear and meaningful. It includes sentence structure, tense, parts of speech, punctuation, agreement and correct word use.

Effective communication does not mean using difficult English. It means expressing ideas clearly, correctly and appropriately. A simple sentence with correct grammar is better than a complicated sentence full of mistakes.

Grammar is important in academic writing because errors can confuse meaning. In official letters, applications, reports and answers, grammatical accuracy creates a good impression. However, grammar should support communication, not make students afraid of writing.

For college students, the best way to improve grammar is through regular reading, writing and correction. Memorising rules alone is not enough. Students should practise sentence formation, paragraph writing and editing.

In Mizoram, where many students are multilingual, English communication can improve gradually with confidence and practice. The goal is clarity, not perfection.`,
      },
    ],
  },

  {
    name: "Geography",
    shortNotes: [
      {
        title: "Geography",
        body: "Geography studies the earth, environment, places, resources and human interaction with nature.",
      },
      {
        title: "Physical Geography",
        body: "Physical geography studies landforms, climate, rivers, soil, vegetation and natural processes.",
      },
      {
        title: "Human Geography",
        body: "Human geography studies population, settlements, migration, culture, economy and human use of space.",
      },
      {
        title: "Climate",
        body: "Climate is the average weather condition of a place over a long period.",
      },
      {
        title: "Resources",
        body: "Resources are materials or conditions that satisfy human needs and support development.",
      },
    ],
    longNotes: [
      {
        title: "Physical Geography of Mizoram",
        body: `Mizoram is a hilly state in Northeast India. Its physical geography is shaped by hills, valleys, rivers and forests. The state is part of the eastern Himalayan and Indo-Myanmar ecological region.

The terrain is mostly mountainous, with ridges running roughly north to south. Flat land is limited, which affects agriculture, transport, settlement and infrastructure development. Road construction is difficult and costly because of slopes, landslides and fragile soil.

Mizoram has many rivers such as Tlawng, Tuirial, Tuivawl, Chhimtuipui and Khawthlangtuipui. These rivers are important for water, agriculture and ecology, though their full economic potential is not fully used.

The state's physical geography influences its economy and society. Hilly terrain protects cultural identity but also creates developmental challenges. Therefore, any development plan in Mizoram must consider geography seriously. Infrastructure, farming, tourism and disaster management must be adapted to hill conditions.`,
      },
      {
        title: "Climate and Monsoon",
        body: `Climate refers to the average weather conditions of a place over a long period. Mizoram has a moderate and humid climate, strongly influenced by the monsoon.

The southwest monsoon brings heavy rainfall to the state. Rainfall supports forests, rivers and agriculture, but it also creates problems such as landslides, road blockages, soil erosion and damage to infrastructure. The hilly terrain makes the impact of rainfall more serious.

Climate affects settlement, farming, transport and daily life. In Mizoram, agricultural patterns, road maintenance and construction work are often shaped by seasonal rainfall. Climate also affects public health, water supply and disaster preparedness.

Climate change can increase risks such as unpredictable rainfall, extreme weather, crop damage and slope instability. Therefore, climate study is not just physical geography; it is connected with planning, economy and governance.

For Mizoram, climate-sensitive development is essential. Roads, housing, agriculture and drainage must be planned according to local environmental conditions.`,
      },
      {
        title: "Natural Resources of Mizoram",
        body: `Natural resources are materials found in nature that can be used for human welfare. Mizoram has forests, bamboo, rivers, fertile valleys, biodiversity and potential for horticulture and tourism.

Forests are one of the most important resources of Mizoram. They support biodiversity, regulate climate, protect soil and provide livelihood materials. Bamboo is especially significant because it can support handicrafts, construction, furniture, paper and small industries.

The state also has potential in horticulture such as oranges, passion fruit, ginger, turmeric and other crops. However, weak market access, transport cost and limited processing facilities reduce benefits for farmers.

Natural resources must be used sustainably. Overuse of forests, careless road construction, shifting cultivation without proper management and unplanned urbanisation can damage the environment.

For Mizoram, the challenge is not lack of resources but lack of value addition, infrastructure and market linkage. Sustainable resource management can support both economy and ecological protection.`,
      },
      {
        title: "Human Geography of Mizoram",
        body: `Human geography studies the relationship between people and space. In Mizoram, human geography includes settlement patterns, population distribution, migration, culture, urbanisation and livelihood.

Population is concentrated in towns and along road-connected areas. Aizawl is the largest urban centre and attracts education, employment, administration and trade. This creates pressure on housing, transport, waste management and public services.

Rural areas remain important for agriculture, community life and cultural continuity. However, many youths migrate toward towns for education and jobs. This changes family structure, village life and aspirations.

Mizoram's human geography is also shaped by tribal identity, language, church institutions and border location. The state shares borders with Myanmar and Bangladesh, making migration and border trade important issues.

A serious study of Mizoram's human geography must connect people, land, culture, economy and governance. Development planning should consider both urban growth and rural sustainability.`,
      },
      {
        title: "Environmental Problems in Hill Areas",
        body: `Hill areas face special environmental problems because their landforms are fragile. Mizoram's hilly terrain is vulnerable to landslides, soil erosion, deforestation, drainage problems and road damage.

Heavy rainfall increases the risk of landslides, especially where slopes are cut for roads and buildings without proper engineering. Urban expansion in Aizawl and other towns creates pressure on land and drainage systems.

Deforestation and unsustainable land use can weaken soil stability. Poor waste management also affects streams, roadsides and urban surroundings. Climate change may make these problems more serious through irregular rainfall and extreme weather.

Environmental problems in hill areas are not only natural; many are linked to planning failure. Unscientific construction, weak regulation and lack of drainage increase disaster risks.

For Mizoram, development must be environmentally sensitive. Roads, buildings, agriculture and town planning must respect hill ecology. Sustainable development is not optional; it is necessary for safety and survival.`,
      },
    ],
  },

  {
    name: "Education",
    shortNotes: [
      {
        title: "Education",
        body: "Education is the process of developing knowledge, skills, values, attitudes and character.",
      },
      {
        title: "Aims of Education",
        body: "The aims of education include knowledge, character, citizenship, livelihood and social development.",
      },
      {
        title: "Curriculum",
        body: "Curriculum is the planned learning experience provided by an educational institution.",
      },
      {
        title: "Teacher",
        body: "A teacher guides learning, shapes character and supports student development.",
      },
      {
        title: "Value Education",
        body: "Value education promotes moral understanding, discipline, responsibility and social harmony.",
      },
    ],
    longNotes: [
      {
        title: "Meaning and Aims of Education",
        body: `Education is the process through which individuals develop knowledge, skills, values, attitudes and personality. It is not limited to classroom learning; it includes family, community, experience and social interaction.

The aims of education differ according to society and time. At a basic level, education gives literacy and knowledge. At a higher level, it develops critical thinking, character, citizenship, employment skills and social responsibility.

Education also prepares individuals to participate in democracy. A citizen who can read, reason and question is less likely to be blindly controlled. Therefore, education is closely linked with freedom and development.

For Mizoram, education has played a major role in social transformation. Missionary education increased literacy and changed society deeply. Today, the challenge is to move from certificate-based education to skill-based, research-based and problem-solving education.

Thus, education should create not only degree holders but responsible, capable and thoughtful human beings.`,
      },
      {
        title: "Role of Education in Society",
        body: `Education performs many important functions in society. It transmits culture, develops personality, prepares citizens, supports economic growth and promotes social change.

Through education, society passes language, values, history and knowledge from one generation to another. At the same time, education can challenge harmful traditions and promote equality, scientific thinking and democratic values.

Education also has an economic role. It provides skills needed for employment, entrepreneurship and professional life. A society with poor education faces weak productivity and limited development.

In Mizoram, education has created high literacy and strong social awareness. However, educated unemployment shows that education must be linked with skills, innovation and local economic needs. Students should be trained not only to seek government jobs but also to create opportunities.

Therefore, education is both conservative and transformative. It preserves society but also changes it.`,
      },
      {
        title: "Teacher and Classroom Management",
        body: `A teacher is not only a transmitter of information but a guide, organiser and motivator. Good teaching requires knowledge, communication, patience, discipline and understanding of students.

Classroom management refers to the ability to create a learning environment where students can participate, focus and grow. It includes planning lessons, maintaining discipline, encouraging discussion and handling different learning abilities.

A good teacher balances authority with kindness. Too much strictness creates fear, while too much freedom may create disorder. Effective classroom management creates respect and responsibility.

In modern education, teachers must also handle digital tools, inclusive classrooms, emotional issues and exam pressure. In Mizoram, teachers often influence not only academic learning but also moral and community life.

The quality of education depends heavily on the quality of teachers. Buildings and syllabus are important, but without committed teachers, education becomes mechanical.`,
      },
      {
        title: "Value Education",
        body: `Value education is the teaching of moral, social and civic values. It helps students develop honesty, discipline, respect, responsibility, compassion and concern for society.

Education without values can produce skilled but selfish individuals. Therefore, knowledge must be connected with character. Value education teaches students to use learning for public good rather than only personal success.

In a democratic society, value education supports tolerance, equality, respect for law and social harmony. It also helps reduce corruption, violence, discrimination and irresponsible behaviour.

In Mizoram, values are strongly influenced by family, church, school and community. However, modern society faces challenges such as materialism, social media pressure, substance abuse and weakening discipline. Value education must therefore be practical, not only moral preaching.

A good education system should develop both competence and conscience. Students should learn not only how to succeed but also how to live responsibly.`,
      },
      {
        title: "Education in Mizoram",
        body: `Education in Mizoram has played a major role in transforming society. The coming of Christianity and missionary education greatly improved literacy and introduced modern learning. Today, Mizoram is one of the highly literate states in India.

However, high literacy does not automatically mean high-quality education. The state faces challenges such as educated unemployment, weak research culture, limited technical institutions, dependence on government jobs and uneven quality between urban and rural schools.

Education in Mizoram must now move beyond memorisation. Students need critical thinking, digital literacy, communication skills, entrepreneurship, research skills and practical training. Local problems such as environment, governance, agriculture, tourism and border issues should also enter classroom discussion.

The purpose of education should be social transformation. It must prepare youths to serve Mizoram with knowledge, skill and moral responsibility.

Thus, Mizoram's next educational challenge is not literacy alone but quality, relevance and employability.`,
      },
    ],
  },

  {
    name: "Environmental Studies",
    shortNotes: [
      {
        title: "Environment",
        body: "Environment includes the natural and human-made surroundings that support life.",
      },
      {
        title: "Biodiversity",
        body: "Biodiversity means the variety of plants, animals and microorganisms in an ecosystem.",
      },
      {
        title: "Pollution",
        body: "Pollution is the contamination of air, water, soil or surroundings by harmful substances.",
      },
      {
        title: "Climate Change",
        body: "Climate change means long-term changes in temperature, rainfall and weather patterns.",
      },
      {
        title: "Sustainable Development",
        body: "Sustainable development meets present needs without destroying the ability of future generations to meet theirs.",
      },
    ],
    longNotes: [
      {
        title: "Meaning and Importance of Environment",
        body: `Environment refers to the surroundings in which living beings exist. It includes air, water, land, forests, animals, climate and human-made surroundings. Human life depends completely on the environment for food, water, shelter, energy and survival.

Environmental studies is important because modern development has created serious ecological problems. Deforestation, pollution, climate change, waste generation and biodiversity loss affect human health and economic life.

In Mizoram, the environment is closely connected with hills, forests, rivers, agriculture and community life. Damage to the environment can lead to landslides, water problems, soil erosion and loss of livelihood.

Environmental awareness teaches people that development and nature must be balanced. Roads, buildings and industries are necessary, but they must be planned carefully. A society that destroys its environment destroys its own future.

Therefore, environment is not only a science topic; it is a development, governance and survival issue.`,
      },
      {
        title: "Biodiversity Conservation",
        body: `Biodiversity means the variety of life forms, including plants, animals, insects, birds, microorganisms and ecosystems. It is important because every species plays a role in maintaining ecological balance.

Mizoram is rich in biodiversity because of its forests, hills and location in the Indo-Myanmar biodiversity region. Forests provide habitat, regulate rainfall, protect soil and support local livelihoods.

Biodiversity is threatened by deforestation, hunting, habitat destruction, pollution, climate change and unplanned development. Loss of biodiversity weakens ecosystems and affects future generations.

Conservation means protecting species, habitats and ecological processes. It can be done through protected areas, community forests, awareness, sustainable farming and control of illegal exploitation.

For Mizoram, biodiversity conservation must involve local communities because people live close to forests and depend on natural resources. Conservation should not be anti-people; it should combine ecological protection with sustainable livelihood.`,
      },
      {
        title: "Climate Change and Society",
        body: `Climate change refers to long-term changes in temperature, rainfall and weather patterns. It is caused mainly by greenhouse gas emissions, deforestation and unsustainable development.

Climate change affects agriculture, water supply, health, biodiversity and disaster risk. In hill states like Mizoram, its effects may appear through irregular rainfall, landslides, crop damage, heat stress and water scarcity.

Climate change is not only an environmental issue. It is also a social and economic issue because poor people are often more vulnerable. Farmers, daily workers and rural communities may suffer more from environmental instability.

Responses to climate change include reducing emissions, protecting forests, improving drainage, promoting sustainable agriculture, disaster preparedness and climate-resilient infrastructure.

For Mizoram, climate policy must be local. Roads, buildings, agriculture and town planning should consider rainfall, slope stability and ecological fragility. Climate awareness must become part of education and governance.`,
      },
      {
        title: "Sustainable Development",
        body: `Sustainable development means development that meets present needs without damaging the ability of future generations to meet their needs. It tries to balance economic growth, social justice and environmental protection.

Development is necessary because people need roads, schools, hospitals, jobs and income. But development becomes dangerous when it destroys forests, pollutes rivers, displaces communities or creates inequality.

In Mizoram, sustainable development is especially important because the environment is fragile and land is limited. Road construction, urban growth, tourism and agriculture must be planned carefully to avoid landslides, waste problems and ecological damage.

Sustainable development also requires good governance. Corruption, poor planning and short-term politics can destroy both development and environment. People must participate in planning and monitoring.

A sustainable Mizoram should combine infrastructure, local economy, cultural protection and ecological balance. True development is not only faster growth but safer and fairer growth.`,
      },
      {
        title: "Waste Management",
        body: `Waste management refers to the proper collection, transport, treatment and disposal of waste. It includes household waste, plastic, electronic waste, medical waste and industrial waste.

Poor waste management creates pollution, bad smell, blocked drains, disease and damage to rivers and soil. In hill towns like Aizawl, waste problems become more serious because land is limited and slopes make disposal difficult.

Good waste management begins with segregation. Biodegradable waste, plastic, paper, metal and hazardous waste should be separated. Recycling, composting and reduction of single-use plastic can reduce pressure on dumping sites.

Public awareness is essential. Government alone cannot manage waste if citizens continue careless disposal. Schools, churches, local councils and youth groups can play an important role.

For Mizoram, waste management must become part of urban planning and civic culture. Clean surroundings are not only about beauty; they are about health, environment and responsible citizenship.`,
      },
    ],
  },
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
            College-Level Free Study Notes
          </h1>

          <p className="mt-4 max-w-4xl text-slate-300">
            Simple English but college-standard notes for Mizoram students.
            Each subject contains short revision notes and long exam-style
            explanations with concepts, examples and local relevance.
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
              onClick={() => {
                setSelectedSubject(item.name);
                setSearch("");
              }}
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
            <h2 className="text-2xl font-bold text-cyan-300">
              Short Notes: {subject.name}
            </h2>

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
                  <h3 className="text-xl font-bold text-white">
                    {note.title}
                  </h3>
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