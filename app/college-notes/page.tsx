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
  // =========================================================
  // POLITICAL SCIENCE
  // =========================================================
  {
    name: "Political Science",

    shortNotes: [
      {
        title: "Political Science",
        body:
          "Political Science is the study of the State, government, political institutions, power, authority, rights, duties, political ideas and political behaviour.",
      },
      {
        title: "State",
        body:
          "A State is a politically organised community living permanently within a definite territory, having a government and possessing sovereignty.",
      },
      {
        title: "Sovereignty",
        body:
          "Sovereignty means the supreme power of the State to make and enforce laws within its territory without being subject to another political authority.",
      },
      {
        title: "Democracy",
        body:
          "Democracy is a system of government in which people participate directly or indirectly through elected representatives.",
      },
      {
        title: "Federalism",
        body:
          "Federalism is a system in which constitutional powers are divided between a central government and regional governments.",
      },
      {
        title: "Political Ideology",
        body:
          "Political ideology is a system of ideas and beliefs about society, government, economy, rights, power and political change.",
      },
      {
        title: "Traditional Approach",
        body:
          "The Traditional Approach studies formal institutions, constitutions, law, history and political philosophy. It concentrates mainly on what political institutions should be and how they are organised.",
      },
      {
        title: "Behavioural Approach",
        body:
          "The Behavioural Approach studies the actual political behaviour of individuals and groups. It uses observation, surveys, statistics and other scientific methods.",
      },
      {
        title: "Marxist Approach",
        body:
          "The Marxist Approach explains politics mainly through class relations, economic structure and ownership of the means of production.",
      },
      {
        title: "Pluralist View of the State",
        body:
          "Pluralism argues that political power is distributed among many competing groups rather than being completely controlled by one class or organisation.",
      },
      {
        title: "Elite Theory",
        body:
          "Elite theory argues that political power is usually concentrated in the hands of a small minority possessing wealth, organisation, knowledge or influence.",
      },
      {
        title: "Power",
        body:
          "Power means the ability of a person or group to influence the behaviour or decisions of others.",
      },
      {
        title: "Authority",
        body:
          "Authority is legitimate power. People obey authority because they believe that the command or institution has a recognised right to rule.",
      },
      {
        title: "Liberty",
        body:
          "Liberty means the freedom of individuals to think, speak and act without unnecessary restrictions, while respecting the rights of others.",
      },
      {
        title: "Equality",
        body:
          "Political equality means that citizens should enjoy equal status and equal political rights without discrimination.",
      },
      {
        title: "Justice",
        body:
          "Justice means fairness in the distribution of rights, duties, opportunities, rewards and punishments.",
      },
      {
        title: "Rights",
        body:
          "Rights are recognised claims and freedoms necessary for the development and dignity of individuals.",
      },
      {
        title: "Fundamental Rights",
        body:
          "Fundamental Rights are constitutionally guaranteed rights provided mainly in Part III of the Indian Constitution.",
      },
      {
        title: "Fundamental Duties",
        body:
          "Fundamental Duties are moral and civic duties of Indian citizens listed under Article 51A of the Constitution. There are eleven Fundamental Duties.",
      },
      {
        title: "Article 21A",
        body:
          "Article 21A provides free and compulsory education for children between six and fourteen years of age.",
      },
      {
        title: "Rights of Children",
        body:
          "Child rights include rights to survival, development, education, protection from exploitation and participation in matters affecting children.",
      },
      {
        title: "Political Socialisation",
        body:
          "Political socialisation is the process through which individuals learn political values, attitudes, beliefs and patterns of political behaviour.",
      },
      {
        title: "Political Culture",
        body:
          "Political culture refers to the attitudes, beliefs, values and expectations that people have regarding politics and government.",
      },
      {
        title: "Political Participation",
        body:
          "Political participation includes voting, campaigning, attending meetings, joining organisations, protesting and other activities through which citizens influence politics.",
      },
      {
        title: "Historical Materialism",
        body:
          "Historical materialism is the Marxist idea that historical development is strongly shaped by material conditions, economic production and class relations.",
      },
      {
        title: "Dialectical Materialism",
        body:
          "Dialectical materialism explains change through contradictions and conflict within material conditions. Marxists used it to analyse social and historical transformation.",
      },
    ],

    longNotes: [
      {
        title: "Traditional Approach to Political Science",
        body: `The Traditional Approach is one of the oldest approaches to the study of politics. It concentrates on formal political institutions such as the State, government, constitution, legislature, executive and judiciary.

Traditional scholars often use historical, legal, philosophical and institutional methods. Plato and Aristotle examined political life mainly through questions of justice, virtue, good government and the ideal State. Later scholars studied constitutions, laws and political institutions.

The approach is useful because political institutions and constitutional rules remain important parts of political life. It helps students understand how governments are organised and how political ideas developed.

However, the Traditional Approach is criticised for giving insufficient attention to actual political behaviour. It may describe institutions without explaining how citizens, political parties, pressure groups and leaders behave in practice.

Therefore, modern Political Science continues to use traditional methods but combines them with behavioural, sociological, economic and empirical approaches.`,
      },
      {
        title: "Behavioural Approach",
        body: `The Behavioural Approach became important in Political Science particularly after the Second World War. Behaviouralists argued that Political Science should study actual political behaviour rather than only constitutions and formal institutions.

The approach studies voting behaviour, political attitudes, leadership, political participation, group behaviour and public opinion. It uses surveys, interviews, observation, statistics and other empirical methods.

David Easton identified important characteristics of behaviouralism such as regularities, verification, techniques, quantification, values, systematisation, pure science and integration.

The main contribution of behaviouralism was to make Political Science more empirical and scientific. It encouraged scholars to collect evidence instead of depending only on philosophical arguments.

However, behaviouralism was criticised for becoming too technical and for separating facts from important questions of justice and values. This criticism later contributed to the rise of post-behaviouralism.`,
      },
      {
        title: "Marxist Approach",
        body: `The Marxist Approach studies politics through economic structure, class relations and ownership of the means of production. Karl Marx believed that political institutions cannot be fully understood without examining the economic organisation of society.

In capitalist society, Marx identified two major classes. The bourgeoisie owns the means of production, while the proletariat survives mainly by selling labour. Marxists argue that political institutions often reflect the interests and power of economically dominant classes.

Marx also developed the idea of historical materialism. According to this view, changes in production and class relations strongly influence historical development.

Class conflict plays a major role in political change. Marx believed that contradictions within capitalism could eventually produce revolutionary transformation.

The Marxist approach is important because it connects politics with economics, inequality and class power. Critics, however, argue that Marxism may give too much importance to economic factors and underestimate religion, nationalism, culture and individual choice.`,
      },
      {
        title: "Pluralist View of the State",
        body: `The pluralist view argues that political power in society is distributed among many groups. No single group completely controls the State.

Modern society contains business organisations, trade unions, professional associations, religious organisations, civil society groups, student bodies and other interests. These groups compete to influence public policy.

Robert Dahl is strongly associated with modern pluralism. His work examined how different groups exercise influence in democratic systems.

Pluralists usually see the State as an arena where competing interests bargain and negotiate. Government decisions are shaped by pressure from many directions.

Pluralism is important because it explains the role of interest groups in democracy. However, critics argue that not all groups possess equal money, organisation or access to government. Wealthy groups may have greater influence than ordinary citizens.

Therefore, pluralism helps explain democratic competition but must also be studied together with inequality and elite power.`,
      },
      {
        title: "Plato's Theory of Justice",
        body: `Plato explained his theory of justice mainly in The Republic. Justice for Plato means harmony and proper performance of functions.

Plato divided society into three classes: rulers, auxiliaries and producers. Rulers should possess wisdom, auxiliaries should possess courage and producers should practise moderation.

Justice exists when each class performs its proper function without interfering in the functions of others. Plato connected this social arrangement with the individual personality, where reason should control spirit and appetite.

He believed philosopher-kings should rule because genuine political leadership requires knowledge and wisdom.

Plato's theory is important because it connects morality and politics. However, critics consider it highly idealistic and argue that its rigid class structure and distrust of democracy conflict with modern democratic equality.

Even with these criticisms, Plato remains one of the most influential thinkers in the history of political thought.`,
      },
      {
        title: "Aristotle's Classification of Constitutions",
        body: `Aristotle classified constitutions according to two major criteria: the number of rulers and the purpose for which they rule.

When one person rules for the common good, Aristotle called it monarchy. Rule by a few for the common good is aristocracy, while rule by many for the common good is polity.

The corrupt forms are tyranny, oligarchy and democracy respectively. These forms become corrupt when rulers govern mainly for their own interests.

Aristotle preferred polity because it combined democratic and oligarchic elements and relied strongly on a stable middle class.

His classification was important because it showed that political systems should be judged not only by the number of rulers but also by whose interests the government serves.

Although modern democratic terminology differs from Aristotle's language, his comparative study of constitutions remains foundational to Political Science.`,
      },
      {
        title: "Social Contract Theory",
        body: `Social Contract Theory explains political authority as originating in an agreement among individuals. Thomas Hobbes, John Locke and Jean-Jacques Rousseau are the major thinkers associated with this tradition.

Hobbes described the state of nature as insecure and violent. People therefore surrendered extensive power to an absolute sovereign in exchange for peace and security.

Locke believed that individuals possessed natural rights to life, liberty and property. Government was created to protect those rights, and people could resist a government that violated them.

Rousseau argued that legitimate authority should express the general will of the citizens.

Social Contract Theory challenged ideas such as divine-right monarchy because it connected political legitimacy with human consent.

Although historians do not consider the social contract an actual historical event, the theory strongly influenced liberalism, democracy, constitutionalism and modern ideas of citizenship.`,
      },
      {
        title: "Federalism in India",
        body: `Federalism divides political authority between central and regional governments. India has a federal constitutional structure with a comparatively strong Union government.

The Constitution distributes legislative subjects through the Union List, State List and Concurrent List. Both the Union and the States possess constitutionally recognised areas of authority.

Federalism is particularly important in India because of linguistic, cultural, religious and regional diversity. It allows regional governments to deal with local needs while maintaining national unity.

However, Indian federalism also contains strong centralising features. Emergency provisions, financial dependence, the office of Governor and centrally sponsored programmes can increase the influence of the Union.

For Mizoram, federalism is closely connected with regional identity, local government, cultural protection and constitutional safeguards.

Indian federalism therefore operates as a continuing balance between national unity and regional autonomy.`,
      },
      {
        title: "Fundamental Rights and Fundamental Duties",
        body: `Fundamental Rights protect individual freedom and dignity, while Fundamental Duties emphasise civic responsibility.

Fundamental Rights are mainly contained in Part III of the Constitution. They include the Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights and Right to Constitutional Remedies.

Fundamental Duties are listed in Article 51A. They were added through the 42nd Constitutional Amendment Act of 1976. An additional duty concerning education of children was later added by the 86th Amendment.

Rights protect citizens against arbitrary power. Duties remind citizens that democracy also requires responsibility.

A democratic society cannot survive through rights alone. Citizens must respect constitutional values, protect public property, promote harmony and participate responsibly in society.

Rights and duties should therefore be understood as complementary parts of democratic citizenship.`,
      },
      {
        title: "Rights of Children in India",
        body: `Children require special constitutional and legal protection because they are vulnerable to exploitation, abuse and neglect.

Article 21A provides free and compulsory education for children between six and fourteen years of age. Article 24 prohibits employment of children below fourteen years in factories, mines and other hazardous employment.

Directive Principles also contain provisions relating to protection and development of children. Article 39 directs the State to protect children against abuse and exploitation.

The Right of Children to Free and Compulsory Education Act, 2009 provides a legal framework for elementary education.

Child rights are commonly grouped into rights to survival, development, protection and participation.

Protecting children requires cooperation among family, schools, government institutions, law enforcement agencies and communities. Child rights should therefore be understood not only as legal rules but as a responsibility of society.`,
      },
      {
        title: "Political Parties in Democracy",
        body: `Political parties are organised groups that seek political power mainly through elections.

They nominate candidates, present policies, organise voters and form governments. Parties also recruit political leaders and connect citizens with government.

In parliamentary democracy, the ruling party or coalition forms the government, while opposition parties examine government decisions and provide alternatives.

Political parties also contribute to political socialisation and political participation.

However, parties may weaken democracy when they become excessively dependent on money, personality, family leadership or narrow identity politics.

Internal democracy, transparency and accountability are therefore important for healthy party systems.

Modern representative democracy would be extremely difficult to operate without political parties because they organise political choice on a large scale.`,
      },
      {
        title: "Political Socialisation and Political Culture",
        body: `Political socialisation is the process through which people learn political values, attitudes and behaviour. Family, schools, friends, religious institutions, media and political organisations can influence political learning.

Political culture refers to the general pattern of attitudes and beliefs that citizens have regarding politics and government.

Political socialisation helps transmit political culture from one generation to another. It can strengthen support for democracy, citizenship and constitutional values.

Political culture differs between societies. Some societies encourage active participation, while others may emphasise obedience or traditional authority.

In modern society, social media has become an important agency of political socialisation. Young citizens receive political information rapidly through digital platforms.

Understanding political socialisation and political culture helps explain why people respond differently to elections, governments and political institutions.`,
      },
    ],
  },

  // =========================================================
  // HISTORY
  // =========================================================
  {
    name: "History",

    shortNotes: [
      {
        title: "History",
        body:
          "History is the systematic study of human society in the past through evidence, sources and interpretation.",
      },
      {
        title: "Historical Sources",
        body:
          "Historical sources include written records, oral traditions, inscriptions, coins, monuments, archaeological remains, photographs and official documents.",
      },
      {
        title: "Colonialism",
        body:
          "Colonialism is political, economic and cultural domination of one territory or people by another power.",
      },
      {
        title: "Nationalism",
        body:
          "Nationalism is a feeling of common identity and political belonging among a group of people.",
      },
      {
        title: "Battle of Plassey",
        body:
          "The Battle of Plassey was fought in 1757 and greatly strengthened the political influence of the English East India Company in Bengal.",
      },
      {
        title: "Revolt of 1857",
        body:
          "The Revolt of 1857 was a major armed uprising against East India Company rule involving soldiers, rulers and sections of the population.",
      },
      {
        title: "Indian National Congress",
        body:
          "The Indian National Congress was founded in 1885 and became the most important organisation of the Indian nationalist movement.",
      },
      {
        title: "Swadeshi Movement",
        body:
          "The Swadeshi Movement encouraged the boycott of foreign goods and promotion of Indian products, particularly after the Partition of Bengal in 1905.",
      },
      {
        title: "Non-Cooperation Movement",
        body:
          "The Non-Cooperation Movement was launched by Gandhi in 1920 to oppose British rule through peaceful non-cooperation.",
      },
      {
        title: "Civil Disobedience Movement",
        body:
          "The Civil Disobedience Movement began in 1930 and included deliberate peaceful violation of unjust colonial laws.",
      },
      {
        title: "Quit India Movement",
        body:
          "The Quit India Movement was launched in August 1942 demanding the end of British rule in India.",
      },
      {
        title: "Indian Independence",
        body:
          "India became independent from British colonial rule on 15 August 1947.",
      },
      {
        title: "Mizo Chieftainship",
        body:
          "Traditional Mizo society was organised around villages led by hereditary chiefs before major administrative reforms.",
      },
      {
        title: "Missionary Influence in Mizoram",
        body:
          "Christian missionaries played an important role in literacy, education, religious conversion and social transformation in Mizoram.",
      },
      {
        title: "Mizoram Peace Accord",
        body:
          "The Mizoram Peace Accord was signed on 30 June 1986 and ended a long period of insurgency.",
      },
      {
        title: "Mizoram Statehood",
        body:
          "Mizoram became a full state of the Indian Union on 20 February 1987.",
      },
    ],

    longNotes: [
      {
        title: "Importance of History",
        body: `History gives society memory, identity and understanding. It examines political, social, cultural and economic developments over time.

Historians reconstruct the past through evidence. Sources include official records, oral traditions, inscriptions, monuments, newspapers, letters, coins and archaeological remains.

Historical knowledge helps people understand how modern institutions and conflicts developed. Many present political issues cannot be properly understood without studying their historical background.

History also teaches critical thinking because historians must compare evidence and examine competing interpretations.

For Mizoram students, history helps explain chieftainship, colonial contact, missionary influence, education, insurgency, the Peace Accord and statehood.

Therefore, history is not simply memorisation of dates. It is an organised attempt to understand change, continuity and human experience.`,
      },
      {
        title: "British Colonial Rule in India",
        body: `British political control in India developed gradually from commercial activity. The East India Company entered India for trade but later acquired political and territorial power.

The Battle of Plassey in 1757 and the Battle of Buxar in 1764 strengthened Company authority in eastern India.

Colonial rule transformed administration, taxation, law, transport and education. Railways, modern bureaucracy and English education expanded, but these changes were largely organised around colonial interests.

Indian agriculture and industries were affected by revenue demands, commercialisation and competition with British manufactured goods.

At the same time, modern education, newspapers and political associations contributed to the development of Indian nationalism.

Colonial rule therefore produced major institutional changes while also creating economic exploitation and political subordination.`,
      },
      {
        title: "Revolt of 1857",
        body: `The Revolt of 1857 was a major challenge to East India Company rule. It began among sepoys at Meerut and quickly spread to Delhi, Kanpur, Lucknow, Jhansi and other regions.

The immediate trigger was controversy over rifle cartridges believed to contain cow and pig fat. However, deeper political, economic, military and social causes already existed.

Indian rulers were angered by annexation policies. Soldiers faced discrimination, while peasants and traditional elites experienced economic pressure.

The revolt failed because it lacked unified leadership, common planning and support across the whole subcontinent.

Nevertheless, it had major consequences. Company rule ended and India came under direct British Crown administration in 1858.

Historians disagree over its nature. Some describe it mainly as a military mutiny, while others consider it an important early struggle against colonial rule.`,
      },
      {
        title: "Rise of Indian Nationalism",
        body: `Indian nationalism developed gradually during the nineteenth century.

Modern education introduced ideas of liberty, equality and nationalism. Newspapers spread information and political criticism. Improved transport and communication also connected people from different regions.

Economic exploitation under colonial rule created dissatisfaction. Indian thinkers criticised the drain of wealth and discriminatory policies.

The Indian National Congress was founded in 1885 and became an important platform for political demands.

Early nationalist leaders initially used petitions and constitutional methods. Later movements became more assertive and eventually developed into mass struggles.

Nationalism united people around the idea that Indians should govern themselves. However, nationalist politics also contained regional, religious, ideological and social differences.

The Indian freedom struggle therefore developed through many organisations, leaders and political strategies.`,
      },
      {
        title: "Gandhi and the Indian National Movement",
        body: `Mahatma Gandhi transformed Indian nationalism into a mass political movement.

His political methods included satyagraha, non-violence, non-cooperation and civil disobedience. Gandhi believed political struggle should be connected with moral discipline.

He led major national movements including the Non-Cooperation Movement, Civil Disobedience Movement and Quit India Movement.

Gandhi brought peasants, workers, women, students and ordinary citizens more directly into nationalist politics.

He also promoted swadeshi, khadi, village industries and campaigns against untouchability.

Gandhi faced criticism from revolutionaries, socialists, Ambedkarite thinkers and others who disagreed with various aspects of his politics.

Despite disagreements, Gandhi remains central to the history of India's freedom movement because of his ability to transform nationalism into mass participation.`,
      },
      {
        title: "Non-Cooperation Movement",
        body: `The Non-Cooperation Movement began in 1920 under Mahatma Gandhi.

Its background included dissatisfaction with British policies, the Rowlatt Act, the Jallianwala Bagh massacre and the Khilafat issue.

The movement encouraged Indians to withdraw cooperation from colonial institutions. People were asked to boycott certain schools, courts, titles, elections and foreign goods.

The movement expanded nationalist participation across many sections of society.

However, Gandhi suspended the movement in 1922 following the violent incident at Chauri Chaura.

Although it did not achieve immediate independence, the movement changed Indian politics by bringing large numbers of ordinary people into the nationalist struggle.

It also established Gandhi as the most important mass leader of the Indian National Congress.`,
      },
      {
        title: "Civil Disobedience Movement",
        body: `The Civil Disobedience Movement began in 1930.

Gandhi launched the Salt March from Sabarmati to Dandi to protest the British monopoly and taxation on salt.

Civil disobedience involved deliberate peaceful violation of colonial laws. Participants broke salt laws, boycotted foreign goods and joined demonstrations.

The movement spread to different parts of India and involved women, students, peasants and political activists.

Negotiations temporarily interrupted the movement through the Gandhi-Irwin Pact, but political conflict continued.

The movement showed that British authority could be challenged through large-scale non-violent resistance.

It also attracted international attention to India's demand for self-government.`,
      },
      {
        title: "Quit India Movement",
        body: `The Quit India Movement was launched by the Indian National Congress in August 1942 during the Second World War.

The movement demanded the immediate end of British rule. Gandhi gave the famous call of "Do or Die."

British authorities quickly arrested major Congress leaders. Despite this, protests spread in many parts of India.

Some demonstrations became violent and communication systems and government institutions were attacked.

The movement was suppressed, but it demonstrated that British rule faced deep political opposition.

After the Second World War, changing international conditions, economic pressures and continued Indian nationalist demands made continuation of colonial rule increasingly difficult.

Quit India therefore became one of the final major mass movements before independence.`,
      },
      {
        title: "Mizo Traditional Society and Chieftainship",
        body: `Traditional Mizo society was organised primarily around villages.

Each village was commonly governed by a hereditary chief who possessed important political, administrative and customary authority.

The chief was supported by advisers and traditional institutions. Village society was also shaped by kinship, clan relationships, customary law and community cooperation.

Traditional institutions regulated land use, disputes, social obligations and village security.

Colonial administration and later democratic reforms gradually transformed the political structure.

The abolition of chieftainship marked a major transition from hereditary village authority to modern representative institutions.

Understanding chieftainship is important because it explains many features of pre-modern Mizo political and social organisation.`,
      },
      {
        title: "Missionary Influence in Mizoram",
        body: `Christian missionaries had a major impact on modern Mizo history.

Missionaries introduced a written form of the Mizo language and developed educational institutions.

Literacy expanded rapidly and schools became important centres of social change.

Christianity transformed religious life and also influenced social values, family practices, community institutions and attitudes toward older customs.

Missionary activity contributed to the rise of a highly literate society.

The church eventually became one of the most influential social institutions in Mizoram.

Missionary influence should therefore be understood as both religious and social transformation. It affected language, education, identity, culture and public life.`,
      },
      {
        title: "Mizoram Peace Accord",
        body: `The Mizoram Peace Accord was signed on 30 June 1986 between the Government of India and the Mizo National Front.

The agreement ended nearly two decades of insurgency and political conflict.

The Accord enabled former underground leaders to enter constitutional democratic politics.

It also created the political conditions for Mizoram to become a full state in 1987.

The settlement is widely regarded as one of India's successful peace agreements because armed conflict was transformed into peaceful electoral competition.

The Accord demonstrates the importance of negotiation, compromise and political trust.

Peace did not remove every development problem, but it provided long-term political stability.

For Mizoram, the Peace Accord remains one of the most important turning points in modern history.`,
      },
      {
        title: "Mizoram Statehood",
        body: `Mizoram became a full-fledged state of India on 20 February 1987.

Statehood followed the political settlement created by the Mizoram Peace Accord of 1986.

Before becoming a state, Mizoram had undergone several administrative changes under colonial and post-independence governments.

Statehood gave Mizoram its own elected State Government within India's federal system.

It strengthened constitutional representation and provided greater political recognition for regional identity and administration.

Statehood also created new responsibilities in development, governance, education, infrastructure and public administration.

The event therefore marked both political recognition and the beginning of a new phase of democratic government in Mizoram.`,
      },
    ],
  },

  // =========================================================
  // ECONOMICS
  // =========================================================
  {
    name: "Economics",

    shortNotes: [
      {
        title: "Economics",
        body:
          "Economics studies how individuals and societies use scarce resources to satisfy human wants.",
      },
      {
        title: "Scarcity",
        body:
          "Scarcity means resources are limited while human wants are comparatively unlimited.",
      },
      {
        title: "Opportunity Cost",
        body:
          "Opportunity cost is the value of the next best alternative sacrificed when a choice is made.",
      },
      {
        title: "Demand",
        body:
          "Demand is the quantity of a commodity that consumers are willing and able to purchase at a particular price.",
      },
      {
        title: "Supply",
        body:
          "Supply is the quantity of a commodity that producers are willing and able to offer for sale at a given price.",
      },
      {
        title: "Market",
        body:
          "A market is any arrangement through which buyers and sellers interact to exchange goods or services.",
      },
      {
        title: "Inflation",
        body:
          "Inflation is a sustained rise in the general price level, reducing the purchasing power of money.",
      },
      {
        title: "Deflation",
        body:
          "Deflation is a sustained decline in the general price level of goods and services.",
      },
      {
        title: "GDP",
        body:
          "Gross Domestic Product measures the value of final goods and services produced within a country during a given period.",
      },
      {
        title: "Per Capita Income",
        body:
          "Per capita income is calculated by dividing total national income by population.",
      },
      {
        title: "Unemployment",
        body:
          "Unemployment exists when people who are willing and able to work cannot obtain suitable employment.",
      },
      {
        title: "Disguised Unemployment",
        body:
          "Disguised unemployment occurs when more workers are employed than are actually required for production.",
      },
      {
        title: "Fiscal Policy",
        body:
          "Fiscal policy refers to government decisions regarding taxation, public spending and borrowing.",
      },
      {
        title: "Monetary Policy",
        body:
          "Monetary policy refers to central-bank measures concerning money supply, interest rates and credit conditions.",
      },
      {
        title: "Poverty",
        body:
          "Poverty refers to a condition in which people lack sufficient income or resources to maintain an acceptable standard of living.",
      },
      {
        title: "Development",
        body:
          "Economic development includes improvements in income, employment, health, education, infrastructure and quality of life.",
      },
      {
        title: "Human Development",
        body:
          "Human development focuses on improving people's capabilities, education, health and opportunities rather than income alone.",
      },
      {
        title: "Public Finance",
        body:
          "Public finance studies government revenue, expenditure, taxation, borrowing and financial administration.",
      },
      {
        title: "Tax",
        body:
          "A tax is a compulsory payment imposed by government to finance public expenditure.",
      },
      {
        title: "Budget",
        body:
          "A government budget is an annual statement of estimated public revenue and expenditure.",
      },
    ],

    longNotes: [
      {
        title: "Nature and Scope of Economics",
        body: `Economics studies human choices under conditions of scarcity.

Resources such as land, labour, capital and time are limited, while human wants are numerous. Societies must therefore decide what to produce, how to produce and for whom to produce.

Economics is commonly divided into microeconomics and macroeconomics. Microeconomics studies consumers, firms, prices and individual markets. Macroeconomics examines national income, inflation, unemployment, growth and the economy as a whole.

The subject also includes public finance, international trade, money, banking and development economics.

Economics is not simply the study of money. It examines choices, incentives and allocation of resources.

For Mizoram, economics helps explain government finances, unemployment, transport costs, agriculture, markets, entrepreneurship and economic dependence.`,
      },
      {
        title: "Law of Demand",
        body: `The Law of Demand states that, other things remaining unchanged, quantity demanded generally falls when price rises and increases when price falls.

This creates an inverse relationship between price and quantity demanded.

One reason is the substitution effect. When one product becomes expensive, consumers may shift toward alternatives.

Another reason is the income effect. A lower price increases the purchasing power of consumers.

Demand is also affected by income, preferences, expectations, population and prices of related goods.

There are exceptions to the ordinary law, but it remains a basic principle for understanding markets.

The Law of Demand is important for businesses, governments and consumers because price changes influence purchasing behaviour.`,
      },
      {
        title: "Law of Supply",
        body: `The Law of Supply states that producers generally offer more of a commodity when its price rises, other things remaining constant.

Higher prices can make production more profitable, encouraging firms to increase output.

When prices fall, producers may reduce the quantity supplied.

Supply is also influenced by production costs, technology, taxation, subsidies, expectations and the number of producers.

The interaction between demand and supply helps determine market price.

Understanding supply is important because shortages or increases in production can strongly influence prices.

In Mizoram, supply conditions are particularly important because transport and connectivity affect the availability and price of many goods.`,
      },
      {
        title: "Inflation and its Effects",
        body: `Inflation is a sustained increase in the general price level.

When prices rise continuously, the purchasing power of money falls. People require more money to purchase the same quantity of goods.

Inflation can be caused by excessive demand, shortages, rising production costs, fuel prices, supply disruptions or expansion of money and credit.

Fixed-income groups often suffer because income may not rise as quickly as prices.

Inflation also creates uncertainty for savings and investment.

Governments can respond through fiscal policy, while central banks use monetary measures.

In Mizoram, inflation is often strongly felt because many goods are transported from outside the state. Higher fuel and transport costs can quickly raise retail prices.`,
      },
      {
        title: "Unemployment in India",
        body: `Unemployment exists when people willing and able to work cannot obtain suitable employment.

India experiences educated unemployment, seasonal unemployment, disguised unemployment and structural unemployment.

Educated unemployment is particularly important because large numbers of graduates seek limited formal-sector employment.

In Mizoram, dependence on government jobs can make this problem more visible.

Causes include limited industrial development, mismatch between education and labour-market needs, weak private investment and insufficient skill development.

Solutions include entrepreneurship, vocational training, infrastructure development, tourism, agriculture-based industries and digital employment opportunities.

Employment is important not only for income but also dignity, social stability and personal development.`,
      },
      {
        title: "Poverty and Development",
        body: `Poverty involves deprivation of income, basic needs and opportunities.

It may include inadequate food, housing, education, healthcare and employment.

Economic growth can help reduce poverty, but growth alone does not guarantee equal benefits.

Development policies must therefore consider distribution, education, health and social protection.

Government programmes can support vulnerable groups through employment, food security and welfare measures.

Long-term poverty reduction requires productive employment and human-capital development.

Poverty should therefore be understood as a multidimensional problem rather than only low income.`,
      },
      {
        title: "Economic Development in Mizoram",
        body: `Economic development in Mizoram requires improvements in employment, income, infrastructure, health, education and productive capacity.

Mizoram has strengths such as high literacy, social stability, natural resources and potential in horticulture, tourism and digital services.

However, difficult terrain, limited industrialisation, high transport costs and a small domestic market create challenges.

The economy also depends heavily on government spending and transfers.

Greater emphasis can be placed on local production, food processing, bamboo industries, horticulture, tourism and entrepreneurship.

Connectivity and market access are essential because producers need reliable links with consumers.

Development should remain environmentally sustainable because Mizoram's hill ecology is fragile.`,
      },
      {
        title: "Fiscal Policy",
        body: `Fiscal policy refers to the government's use of taxation and expenditure to influence the economy.

Government expenditure can support infrastructure, education, healthcare, employment and welfare.

Taxes provide revenue and can also influence consumption and investment.

During economic slowdown, governments may increase expenditure to stimulate demand.

During excessive inflation, governments may reduce expenditure or increase certain taxes.

Fiscal policy also affects public debt and budget deficits.

In developing regions, public spending has a particularly important role because private investment may be limited.

Effective fiscal policy requires both sufficient resources and responsible financial management.`,
      },
      {
        title: "Monetary Policy",
        body: `Monetary policy is mainly conducted by a central bank.

Its objectives include price stability, financial stability and appropriate credit conditions.

The central bank can influence interest rates, bank reserves and money supply.

When inflation is high, monetary policy may become tighter to reduce excessive demand.

During weak economic activity, easier monetary conditions may encourage borrowing and investment.

Monetary policy affects households through loan rates, savings returns and credit availability.

In India, the Reserve Bank of India plays the central role in monetary policy.`,
      },
      {
        title: "Human Development",
        body: `Human development focuses on expanding people's capabilities and opportunities.

Income is important, but development also requires education, health, security and participation.

The Human Development approach therefore goes beyond national income alone.

A region may have economic growth without equal improvements in education or healthcare.

Investments in schools, hospitals, nutrition and skills strengthen human capabilities.

Mizoram's high literacy provides an important foundation, but employment and skill opportunities are also necessary.

Human development ultimately asks whether people are able to live healthy, educated and meaningful lives.`,
      },
    ],
  },

  // =========================================================
  // SOCIOLOGY
  // =========================================================
  {
    name: "Sociology",

    shortNotes: [
      {
        title: "Sociology",
        body:
          "Sociology is the systematic study of society, social relationships, institutions and social behaviour.",
      },
      {
        title: "Society",
        body:
          "Society is a network of social relationships connecting individuals, groups and institutions.",
      },
      {
        title: "Community",
        body:
          "A community is a group of people connected by common locality, identity or social relationships.",
      },
      {
        title: "Culture",
        body:
          "Culture includes values, customs, beliefs, language, symbols, knowledge and shared ways of life.",
      },
      {
        title: "Norms",
        body:
          "Social norms are expected rules or standards of behaviour within a society.",
      },
      {
        title: "Values",
        body:
          "Values are shared ideas about what society considers important, desirable or morally acceptable.",
      },
      {
        title: "Socialisation",
        body:
          "Socialisation is the process through which people learn social norms, roles, values and behaviour.",
      },
      {
        title: "Family",
        body:
          "The family is a basic social institution connected with reproduction, care, socialisation and emotional support.",
      },
      {
        title: "Social Institution",
        body:
          "A social institution is an organised pattern of social relationships created to meet important social needs.",
      },
      {
        title: "Social Group",
        body:
          "A social group consists of people who interact and share some common identity, interest or relationship.",
      },
      {
        title: "Primary Group",
        body:
          "A primary group is characterised by close, personal and relatively long-term relationships, such as family or close friends.",
      },
      {
        title: "Secondary Group",
        body:
          "A secondary group is usually larger, more formal and organised around specific objectives.",
      },
      {
        title: "Social Stratification",
        body:
          "Social stratification refers to the unequal ranking of individuals and groups according to class, caste, status or power.",
      },
      {
        title: "Social Mobility",
        body:
          "Social mobility means movement of individuals or groups from one social position to another.",
      },
      {
        title: "Social Control",
        body:
          "Social control includes mechanisms through which society encourages conformity to accepted norms.",
      },
      {
        title: "Social Change",
        body:
          "Social change refers to significant transformation in social institutions, relationships, values or patterns of behaviour.",
      },
      {
        title: "Modernisation",
        body:
          "Modernisation refers to social transformation associated with industrialisation, education, technology and new institutions.",
      },
      {
        title: "Urbanisation",
        body:
          "Urbanisation is the growth of towns and cities and increasing concentration of population in urban areas.",
      },
      {
        title: "Tribe",
        body:
          "A tribe is a social group historically connected by common ancestry, culture, territory and social identity.",
      },
      {
        title: "Social Problem",
        body:
          "A social problem is a condition widely recognised as harmful to society and requiring collective response.",
      },
    ],

    longNotes: [
      {
        title: "Nature and Scope of Sociology",
        body: `Sociology studies society, institutions and patterns of social relationships.

It examines how individuals behave as members of families, communities, organisations and wider society.

The scope of Sociology includes family, religion, education, economy, politics, culture, social stratification, gender, urbanisation and social change.

Sociology differs from ordinary common sense because it attempts to study social behaviour systematically.

Many personal problems have broader social causes. Unemployment, inequality, crime and migration cannot always be understood only as individual failures.

For Mizoram, Sociology helps examine tribal society, church influence, family change, youth culture, migration, urbanisation and identity.

Sociology therefore helps students understand both continuity and transformation in society.`,
      },
      {
        title: "Culture and Society",
        body: `Culture is the shared way of life of a society.

It includes language, religion, customs, values, symbols, dress, music and patterns of behaviour.

Culture is learned rather than biologically inherited. Individuals acquire it through socialisation.

Culture gives people identity and helps maintain social order.

However, culture is not permanent. Technology, education, migration and communication can transform cultural practices.

In Mizoram, language, community life, Christianity, music and ideas such as tlawmngaihna have strong cultural significance.

Sociology encourages people to respect culture while also examining how cultural practices affect equality, freedom and social development.`,
      },
      {
        title: "Socialisation",
        body: `Socialisation is the process through which individuals learn the values, roles and behaviour of society.

Family is usually the first agency of socialisation. Children learn language, discipline and basic social expectations within the family.

Schools introduce formal knowledge, competition, rules and citizenship.

Peer groups become particularly important during adolescence and youth.

Religion, media and digital communication also shape attitudes and identity.

Socialisation helps society maintain continuity because each generation learns existing norms.

However, socialisation can also reproduce inequality or prejudice.

In modern Mizoram, social media has become an important new influence on youth behaviour, language, politics and aspirations.`,
      },
      {
        title: "Social Stratification",
        body: `Social stratification refers to structured inequality between social groups.

People may be ranked according to class, caste, occupation, wealth, status, gender or political influence.

Stratification affects access to education, employment, healthcare and opportunities.

Some systems are relatively closed, while others allow greater social mobility.

Class stratification is strongly connected with economic resources.

Sociologists examine not only individual differences but also the institutions that reproduce inequality.

Even comparatively equal societies may develop new differences based on income, education and employment.

Understanding stratification helps explain why opportunities are not always equally distributed.`,
      },
      {
        title: "Social Change",
        body: `Social change refers to transformation in institutions, relationships and patterns of behaviour.

Important causes include technology, education, migration, economic development, political reform and social movements.

Change may be gradual or rapid.

Modern communication technologies have greatly accelerated cultural and social change.

In Mizoram, change is visible in family life, urbanisation, education, gender roles, political awareness and digital culture.

Social change may create new opportunities but can also produce conflict and uncertainty.

Sociology studies both the causes and consequences of these transformations.`,
      },
      {
        title: "Family as a Social Institution",
        body: `The family is one of the most important social institutions.

It performs functions such as reproduction, childcare, emotional support, socialisation and economic cooperation.

Families also transmit language, culture and social identity.

Family structures vary between societies and can change over time.

Education, employment, migration and urbanisation can influence family relationships.

Modern families may experience greater individual freedom but also new pressures.

Sociology studies the family because many wider social changes become visible first within family relationships.`,
      },
      {
        title: "Social Control",
        body: `Social control refers to mechanisms used by society to encourage acceptable behaviour.

Informal control comes from family, community, religion, customs and public opinion.

Formal social control is exercised through law, police, courts and government institutions.

Social control helps maintain order and predictability.

However, excessive control may restrict freedom and social change.

Different societies rely on different combinations of formal and informal control.

In close-knit communities, informal social pressure can be particularly strong.

Sociologists therefore examine both the benefits and dangers of social control.`,
      },
      {
        title: "Tribal Society in Mizoram",
        body: `Traditional Mizo society was strongly shaped by clan identity, kinship, village organisation and customary practices.

Chieftainship played an important political and administrative role in the past.

Missionary activity and Christianity transformed education, religion and social institutions.

Modern democratic government later replaced many older political structures.

Contemporary Mizoram is highly connected with national and global society through education, migration, media and technology.

At the same time, tribal identity remains politically and culturally important.

Mizoram therefore provides an important example of how a tribal society can modernise while continuing to protect distinctive identity.`,
      },
      {
        title: "Urbanisation in Mizoram",
        body: `Urbanisation means growth of towns and concentration of population in urban areas.

Aizawl has become the dominant urban centre of Mizoram because it provides government employment, education, healthcare and commercial opportunities.

Urban growth creates demand for housing, roads, transport, water and waste management.

Because Aizawl is located on steep hills, rapid construction also creates environmental risks.

Rural-to-urban migration can weaken village populations while increasing pressure on towns.

Urbanisation creates opportunities but also congestion, inequality and environmental problems.

Good urban planning is therefore essential for sustainable development in Mizoram.`,
      },
      {
        title: "Social Problems and Youth",
        body: `Social problems are conditions that harm significant sections of society and require collective response.

Youth unemployment, substance abuse, crime, educational pressure and digital addiction are examples of issues that may affect young people.

Such problems cannot always be explained by personal weakness.

Economic opportunities, family conditions, peer influence and social institutions also matter.

Young people require education, employment, recreation, counselling and meaningful social participation.

Policies addressing youth problems should therefore combine individual support with wider social reform.

Sociological analysis helps identify the structural conditions behind apparently personal problems.`,
      },
    ],
  },

  // =========================================================
  // PUBLIC ADMINISTRATION
  // =========================================================
  {
    name: "Public Administration",

    shortNotes: [
      {
        title: "Public Administration",
        body:
          "Public Administration is the organisation and implementation of government policies and public programmes.",
      },
      {
        title: "Administration",
        body:
          "Administration means organising people and resources to achieve predetermined objectives.",
      },
      {
        title: "Bureaucracy",
        body:
          "Bureaucracy is a permanent administrative structure based on hierarchy, specialisation, rules and official procedures.",
      },
      {
        title: "Hierarchy",
        body:
          "Hierarchy means arrangement of administrative positions in different levels of authority and responsibility.",
      },
      {
        title: "Delegation",
        body:
          "Delegation means assigning authority and responsibility from a higher official to a subordinate.",
      },
      {
        title: "Coordination",
        body:
          "Coordination means harmonising the activities of different individuals and departments to achieve common goals.",
      },
      {
        title: "Accountability",
        body:
          "Accountability means public officials must explain and justify their decisions and use of public resources.",
      },
      {
        title: "Transparency",
        body:
          "Transparency means government decisions, procedures and information should be open and accessible.",
      },
      {
        title: "Good Governance",
        body:
          "Good governance is transparent, accountable, responsive, participatory, effective and based on rule of law.",
      },
      {
        title: "Development Administration",
        body:
          "Development Administration refers to administrative systems designed to promote planned social and economic development.",
      },
      {
        title: "E-Governance",
        body:
          "E-governance uses information and communication technology to improve administration and public service delivery.",
      },
      {
        title: "Citizen Charter",
        body:
          "A Citizen Charter states the standards and commitments that a public organisation promises to citizens.",
      },
      {
        title: "RTI",
        body:
          "The Right to Information promotes transparency by allowing citizens to request information from public authorities subject to legal exemptions.",
      },
      {
        title: "Public Policy",
        body:
          "Public policy is a course of action adopted by government to address public problems.",
      },
      {
        title: "Local Government",
        body:
          "Local government refers to governing institutions operating at village, town or municipal levels.",
      },
      {
        title: "Personnel Administration",
        body:
          "Personnel administration deals with recruitment, training, promotion, discipline and management of public employees.",
      },
      {
        title: "Financial Administration",
        body:
          "Financial administration concerns budgeting, taxation, expenditure, accounting and financial control.",
      },
      {
        title: "Administrative Ethics",
        body:
          "Administrative ethics refers to principles such as honesty, neutrality, integrity and responsibility in public service.",
      },
      {
        title: "Red Tapism",
        body:
          "Red tapism means excessive dependence on rules and procedures that causes unnecessary administrative delay.",
      },
      {
        title: "Civil Service",
        body:
          "The civil service is the permanent professional administrative machinery that assists elected governments in policy implementation.",
      },
    ],

    longNotes: [
      {
        title: "Meaning and Scope of Public Administration",
        body: `Public Administration refers to the organisation and implementation of government policies.

It includes public organisations, personnel, finance, welfare programmes, regulation and public-service delivery.

Public Administration connects political decisions with practical action.

Citizens experience government through schools, hospitals, roads, police, welfare offices and administrative departments.

The subject includes personnel administration, financial administration, development administration, local government and public policy.

For Mizoram, effective administration is necessary for rural development, infrastructure, healthcare, education and disaster response.

Public Administration is therefore the practical machinery through which the State serves society.`,
      },
      {
        title: "Max Weber's Bureaucratic Theory",
        body: `Max Weber described bureaucracy as a form of organisation based on rational-legal authority.

Its main features include hierarchy, clearly defined responsibilities, written rules, official records and technical expertise.

Officials are expected to perform duties impersonally rather than according to personal preference.

Recruitment should be based on qualifications and competence.

Bureaucracy allows large organisations to operate predictably and continuously.

However, it may also produce red tapism, rigidity and excessive formalism.

Modern democratic government therefore requires both professional bureaucracy and strong accountability.`,
      },
      {
        title: "Good Governance",
        body: `Good governance refers to administration that is transparent, accountable, responsive, participatory and effective.

Rule of law is essential because government itself must operate according to law.

Transparency allows citizens to understand how decisions are made.

Accountability requires officials to explain their actions.

Participation gives citizens opportunities to influence public decisions.

Good governance also requires efficient service delivery and responsible use of resources.

In Mizoram, good governance is important for recruitment, infrastructure, welfare, healthcare and local development.

Government legitimacy depends not only on elections but also on how fairly and effectively public institutions operate.`,
      },
      {
        title: "Development Administration",
        body: `Development Administration focuses on planned social and economic transformation.

It became particularly important in newly independent developing countries.

It is concerned with poverty reduction, rural development, education, health, infrastructure and institution building.

Unlike routine administration, development administration emphasises change, innovation and public participation.

Its success depends on capable officials, coordination, sufficient resources and local participation.

Development programmes often fail because of delay, corruption or weak monitoring.

For Mizoram, development administration is important because difficult terrain and limited markets require effective public planning.`,
      },
      {
        title: "E-Governance and Digital Administration",
        body: `E-governance means using digital technology to improve government services and administrative processes.

Examples include online applications, digital certificates, electronic payments, grievance portals and online public information.

Digital services can reduce travel, paperwork and delays.

This is particularly useful in hill regions where citizens may live far from government offices.

However, digital administration also creates challenges. Citizens need reliable internet, digital literacy and cyber security.

Services should remain accessible to people who are elderly or unfamiliar with digital systems.

E-governance is therefore most effective when technology is combined with responsive and accountable administration.`,
      },
      {
        title: "Accountability in Administration",
        body: `Administrative accountability means public officials must answer for their actions.

Political accountability operates through elected representatives and legislatures.

Legal accountability operates through courts and laws.

Administrative accountability includes supervision, audits and departmental control.

Citizens and media also play important roles in public accountability.

Mechanisms such as RTI and social audits increase transparency.

Accountability is necessary because public officials exercise authority and spend public money.

Without accountability, administration may become inefficient, arbitrary or corrupt.`,
      },
      {
        title: "Right to Information",
        body: `The Right to Information is an important instrument of democratic transparency.

It allows citizens to seek information from public authorities, subject to legally recognised exemptions.

Access to information makes it easier to examine government spending and decisions.

RTI can reduce secrecy and strengthen accountability.

However, the law works effectively only when records are properly maintained and authorities respond on time.

Citizens also need awareness about how to use information responsibly.

RTI therefore connects transparency with democratic participation.`,
      },
      {
        title: "Local Governance",
        body: `Local governance brings public administration closer to citizens.

Village councils, municipalities and other local institutions deal with community-level problems.

Local bodies can understand local needs better than distant authorities.

Decentralisation may improve participation, accountability and service delivery.

However, local governments require adequate finance, trained staff and clearly defined responsibilities.

In Mizoram, local institutions are especially important because settlements are geographically dispersed.

Strong local governance can improve sanitation, roads, local planning and community participation.`,
      },
      {
        title: "Administrative Ethics",
        body: `Administrative ethics refers to moral principles guiding public officials.

Important values include integrity, honesty, neutrality, fairness and commitment to public interest.

Public officials often control resources and exercise discretion.

Ethical administration helps prevent corruption and abuse of authority.

Rules are important, but ethical judgement is also necessary when officials face difficult choices.

Leadership and institutional culture strongly influence ethical behaviour.

A professional civil service should therefore combine technical competence with moral responsibility.`,
      },
      {
        title: "Public Policy",
        body: `Public policy is a course of action adopted by government to deal with public problems.

Policy making generally includes problem identification, agenda setting, formulation, implementation and evaluation.

Governments create policies in areas such as education, health, agriculture and security.

Good policy requires evidence, consultation and administrative capacity.

Even a well-designed policy can fail if implementation is weak.

Public feedback is also important because policies may produce unintended consequences.

Public policy therefore connects political decisions, administration and citizen outcomes.`,
      },
    ],
  },

  // =========================================================
  // ENGLISH
  // =========================================================
  {
    name: "English",

    shortNotes: [
      {
        title: "English Language",
        body:
          "English is widely used in education, administration, research, employment and communication.",
      },
      {
        title: "Communication",
        body:
          "Communication is the process of sharing information, ideas, feelings and meaning between people.",
      },
      {
        title: "Essay Writing",
        body:
          "An essay is an organised piece of writing containing an introduction, body and conclusion.",
      },
      {
        title: "Paragraph",
        body:
          "A paragraph is a group of connected sentences organised around one central idea.",
      },
      {
        title: "Comprehension",
        body:
          "Reading comprehension is the ability to understand, interpret and analyse written material.",
      },
      {
        title: "Precis Writing",
        body:
          "Precis writing means presenting the central meaning of a passage in a shorter and clear form.",
      },
      {
        title: "Grammar",
        body:
          "Grammar is the system of rules governing correct sentence structure and language use.",
      },
      {
        title: "Noun",
        body:
          "A noun is a word used to name a person, place, object, idea or quality.",
      },
      {
        title: "Pronoun",
        body:
          "A pronoun is a word used instead of a noun to avoid unnecessary repetition.",
      },
      {
        title: "Verb",
        body:
          "A verb expresses an action, condition or state of being.",
      },
      {
        title: "Adjective",
        body:
          "An adjective describes or modifies a noun or pronoun.",
      },
      {
        title: "Adverb",
        body:
          "An adverb modifies a verb, adjective or another adverb.",
      },
      {
        title: "Tense",
        body:
          "Tense indicates the time of an action or situation.",
      },
      {
        title: "Active Voice",
        body:
          "In active voice, the subject performs the action expressed by the verb.",
      },
      {
        title: "Passive Voice",
        body:
          "In passive voice, the subject receives the action expressed by the verb.",
      },
      {
        title: "Direct Speech",
        body:
          "Direct speech reproduces the exact words spoken by a person.",
      },
      {
        title: "Indirect Speech",
        body:
          "Indirect speech reports what someone said without necessarily using the exact words.",
      },
      {
        title: "Formal Letter",
        body:
          "A formal letter is written in a polite and organised style for official or professional communication.",
      },
      {
        title: "Report Writing",
        body:
          "Report writing presents factual information about an event, situation or investigation in an organised form.",
      },
      {
        title: "Vocabulary",
        body:
          "Vocabulary refers to the collection of words a person understands and uses.",
      },
    ],

    longNotes: [
      {
        title: "Importance of English in Higher Education",
        body: `English is widely used in higher education in India.

Many textbooks, journals and academic resources are published in English.

English also connects students with national and international scholarship.

It is important for competitive examinations, interviews and research writing.

However, knowledge of English should not be treated as a measure of intelligence.

Students may understand a subject well while still developing language ability.

For college students, the main goal should be clear and accurate communication rather than unnecessarily difficult vocabulary.`,
      },
      {
        title: "Essay Writing",
        body: `Essay writing is the organised presentation of ideas on a particular topic.

A good essay usually contains an introduction, main body and conclusion.

The introduction introduces the subject and establishes direction.

The body develops arguments, explanations and examples.

The conclusion summarises the major points.

Students should avoid repeating the same idea unnecessarily.

Good essays are clear, relevant and logically organised.

At college level, strong content and structure are more important than decorative language.`,
      },
      {
        title: "Reading Comprehension",
        body: `Reading comprehension means understanding and interpreting written material.

Students should identify the central idea, supporting details and the author's argument.

Questions should be answered primarily from information provided in the passage.

A common mistake is answering from personal opinion rather than textual evidence.

Students should notice contrast words, examples and conclusion markers.

Regular reading improves vocabulary and comprehension speed.

Comprehension is important in college examinations and many competitive tests.`,
      },
      {
        title: "Precis Writing",
        body: `Precis writing means reducing a passage while preserving its main meaning.

A precis should be concise, accurate and logically organised.

Students should first understand the central idea.

Examples, repetition and unnecessary details can then be removed.

The passage should generally be rewritten in the student's own words.

Personal opinions should not be added.

Precis writing develops the ability to identify important information and communicate efficiently.`,
      },
      {
        title: "Grammar and Effective Communication",
        body: `Grammar provides the rules that organise language.

Important areas include sentence structure, tense, agreement, punctuation and parts of speech.

Correct grammar helps prevent confusion.

Effective communication does not require extremely complicated English.

Simple and correct sentences are often more effective than difficult sentences full of errors.

Students improve grammar through reading, writing and correction.

The final goal of grammar is clear communication rather than memorisation of rules alone.`,
      },
      {
        title: "Formal Letter Writing",
        body: `Formal letters are used for official and professional communication.

A formal letter normally contains the sender's details, date, recipient details, subject, salutation, body and closing.

The language should be polite, direct and professional.

The first paragraph should clearly state the purpose.

The main body should provide necessary details.

The final paragraph may state the expected action or response.

Unnecessary emotional or informal expressions should be avoided.

Good formal letters are concise, clear and properly organised.`,
      },
      {
        title: "Report Writing",
        body: `A report presents information about an event, activity, investigation or situation.

Reports should be factual and logically organised.

A report may contain a title, introduction, description, findings and conclusion.

Facts should be distinguished from personal opinion.

Dates, locations and important participants should be clearly mentioned when relevant.

Academic reports may also include recommendations.

Report writing is useful in education, administration, journalism and research.`,
      },
      {
        title: "Effective Communication",
        body: `Effective communication means conveying information clearly and appropriately.

Communication includes a sender, message, channel and receiver.

Misunderstanding can occur because of language, noise, poor listening or unclear ideas.

Good communication requires both speaking and listening skills.

In academic settings, students should organise ideas before speaking or writing.

Clear communication improves classroom performance, interviews and professional life.

Confidence develops through regular practice rather than memorising complicated expressions.`,
      },
    ],
  },

  // =========================================================
  // GEOGRAPHY
  // =========================================================
  {
    name: "Geography",

    shortNotes: [
      {
        title: "Geography",
        body:
          "Geography studies the Earth, environment, places, resources and relationships between people and space.",
      },
      {
        title: "Physical Geography",
        body:
          "Physical Geography studies natural features and processes such as landforms, climate, rivers and vegetation.",
      },
      {
        title: "Human Geography",
        body:
          "Human Geography studies population, settlements, culture, economy and human organisation of space.",
      },
      {
        title: "Climate",
        body:
          "Climate is the average pattern of weather conditions over a long period.",
      },
      {
        title: "Weather",
        body:
          "Weather refers to short-term atmospheric conditions such as temperature, rainfall and wind.",
      },
      {
        title: "Monsoon",
        body:
          "Monsoon is a seasonal wind system associated with major changes in rainfall patterns.",
      },
      {
        title: "River",
        body:
          "A river is a natural flowing watercourse moving toward another river, lake or sea.",
      },
      {
        title: "Watershed",
        body:
          "A watershed is an area of land from which water drains into a common river or water body.",
      },
      {
        title: "Soil",
        body:
          "Soil is the upper layer of the Earth's surface that supports plant growth.",
      },
      {
        title: "Natural Resources",
        body:
          "Natural resources are materials and environmental conditions that can be used to satisfy human needs.",
      },
      {
        title: "Population Density",
        body:
          "Population density means the number of people living per unit area.",
      },
      {
        title: "Migration",
        body:
          "Migration is the movement of people from one location to another for temporary or permanent settlement.",
      },
      {
        title: "Urbanisation",
        body:
          "Urbanisation is the increasing proportion of population living in towns and cities.",
      },
      {
        title: "Deforestation",
        body:
          "Deforestation is large-scale removal or loss of forest cover.",
      },
      {
        title: "Soil Erosion",
        body:
          "Soil erosion is the removal of fertile topsoil by water, wind or human activity.",
      },
      {
        title: "Landslide",
        body:
          "A landslide is the downward movement of rock, soil or debris along a slope.",
      },
      {
        title: "Biodiversity",
        body:
          "Biodiversity means the variety of living organisms and ecosystems in a region.",
      },
      {
        title: "Map",
        body:
          "A map is a scaled representation of the Earth's surface or part of it.",
      },
      {
        title: "Latitude",
        body:
          "Latitude measures angular distance north or south of the Equator.",
      },
      {
        title: "Longitude",
        body:
          "Longitude measures angular distance east or west of the Prime Meridian.",
      },
    ],

    longNotes: [
      {
        title: "Physical Geography of Mizoram",
        body: `Mizoram is a predominantly hilly state in Northeast India.

Its landscape consists of ridges, valleys, rivers and extensive forest areas.

The hill ranges generally run from north to south.

Flat land is limited, which affects agriculture, settlement and infrastructure.

Road construction is difficult because of steep slopes and heavy rainfall.

Important rivers include the Tlawng, Tuirial and Chhimtuipui.

Physical geography therefore strongly influences Mizoram's economy and development.

Any major infrastructure programme must take account of slope stability, drainage and environmental conditions.`,
      },
      {
        title: "Climate and Monsoon in Mizoram",
        body: `Mizoram has a humid climate strongly influenced by the monsoon.

The southwest monsoon provides most annual rainfall.

Rainfall supports forests, agriculture and water resources.

However, heavy rain also produces landslides, soil erosion and road damage.

The hill environment makes drainage and slope stability major planning concerns.

Climate also influences agriculture, construction and transport.

Changing rainfall patterns can create new risks.

Development planning in Mizoram must therefore remain climate-sensitive.`,
      },
      {
        title: "Natural Resources of Mizoram",
        body: `Mizoram possesses important natural resources including forests, bamboo, rivers and biodiversity.

The state also has strong horticultural potential.

Bamboo can support furniture, handicrafts, construction and small industries.

Horticultural crops can provide income when farmers have access to markets and processing facilities.

Forests provide ecological services by protecting soil and supporting biodiversity.

Natural-resource development must remain sustainable.

The key challenge is converting local resources into economic value without damaging the environment.`,
      },
      {
        title: "Human Geography of Mizoram",
        body: `Human Geography examines population, settlement, migration and economic activity.

In Mizoram, population distribution is strongly influenced by hills and transport connections.

Aizawl is the largest urban centre and attracts students, workers and government employees.

Urban concentration creates pressure on roads, housing and public services.

Rural areas remain important for agriculture and community life.

Migration between rural and urban areas changes family and village structures.

Mizoram's border location also affects migration and trade.

Human geography therefore connects population patterns with culture, economy and governance.`,
      },
      {
        title: "Environmental Problems in Hill Areas",
        body: `Hill areas are environmentally fragile.

Heavy rainfall can cause landslides and soil erosion.

Road cutting and unplanned construction can further weaken slopes.

Urban growth can create drainage and waste-management problems.

Deforestation can reduce soil stability.

Climate change may intensify extreme weather risks.

Environmental problems in hill regions are therefore both natural and human-made.

Careful engineering, drainage and land-use planning are essential for safe development.`,
      },
      {
        title: "Population and Migration",
        body: `Population geography studies distribution, growth and movement of people.

People often migrate because of employment, education, marriage or security.

Rural-to-urban migration contributes to urban growth.

Migration can improve opportunities for individuals but may create pressure on housing and public services.

Areas losing population may face labour shortages and social change.

In border regions, migration may also become a political and security issue.

Geographers therefore examine both the causes and consequences of population movement.`,
      },
      {
        title: "Urbanisation in Aizawl",
        body: `Aizawl has grown rapidly as Mizoram's administrative, educational and commercial centre.

The city attracts residents from villages and smaller towns.

Rapid population concentration creates traffic congestion and high demand for housing.

Construction on steep slopes increases environmental vulnerability.

Waste disposal, drainage and water supply are important urban challenges.

Public transport and land-use planning are essential for future growth.

Aizawl demonstrates how geography and urbanisation interact strongly in hill environments.`,
      },
      {
        title: "Importance of Forests",
        body: `Forests perform ecological, economic and social functions.

They protect soil, regulate water cycles and support biodiversity.

Forests also provide fuel, food, bamboo and other materials.

In hill regions, forests help reduce erosion and slope instability.

Excessive deforestation can damage watersheds and increase disaster risks.

Forest protection should therefore involve local communities.

Sustainable management allows people to use forest resources while maintaining ecological balance.`,
      },
      {
        title: "Landslides in Mizoram",
        body: `Landslides are common hazards in steep hill environments.

Heavy rainfall is an important natural trigger.

Human activities such as slope cutting, poor drainage and unplanned construction can increase risk.

Landslides damage roads, houses and public infrastructure.

Scientific slope assessment and drainage systems can reduce vulnerability.

Construction regulations should consider local geology.

Public awareness and disaster preparedness are also important.

Landslide management therefore requires cooperation between engineering, environmental planning and local administration.`,
      },
      {
        title: "Geography and Development",
        body: `Geography strongly influences economic development.

Terrain affects transport costs, settlement and agriculture.

Landlocked and mountainous regions may face greater infrastructure costs.

However, geography can also create opportunities through tourism, biodiversity and specialised agriculture.

Development policies should be adapted to local conditions.

Mizoram cannot simply copy development models designed for flat or heavily industrialised regions.

Hill-sensitive planning can combine infrastructure, environmental protection and local economic opportunity.`,
      },
    ],
  },

  // =========================================================
  // EDUCATION
  // =========================================================
  {
    name: "Education",

    shortNotes: [
      {
        title: "Education",
        body:
          "Education is the process of developing knowledge, skills, values, attitudes and personality.",
      },
      {
        title: "Formal Education",
        body:
          "Formal education is organised learning provided through recognised schools, colleges and universities.",
      },
      {
        title: "Informal Education",
        body:
          "Informal education is learning gained naturally through family, community, media and everyday experience.",
      },
      {
        title: "Non-Formal Education",
        body:
          "Non-formal education is organised learning outside the regular formal school system.",
      },
      {
        title: "Aims of Education",
        body:
          "The aims of education include knowledge, character, citizenship, livelihood, creativity and social development.",
      },
      {
        title: "Curriculum",
        body:
          "Curriculum means the planned learning experiences provided by an educational institution.",
      },
      {
        title: "Teaching",
        body:
          "Teaching is the planned process of helping learners acquire knowledge, understanding, skills and values.",
      },
      {
        title: "Learning",
        body:
          "Learning is a relatively lasting change in knowledge, skill, understanding or behaviour through experience.",
      },
      {
        title: "Teacher",
        body:
          "A teacher guides learning, develops students and creates an effective educational environment.",
      },
      {
        title: "Classroom Management",
        body:
          "Classroom management means organising the classroom so that effective learning and discipline can take place.",
      },
      {
        title: "Evaluation",
        body:
          "Evaluation is the systematic judgement of student learning or educational effectiveness.",
      },
      {
        title: "Assessment",
        body:
          "Assessment is the process of collecting information about student learning and performance.",
      },
      {
        title: "Inclusive Education",
        body:
          "Inclusive education aims to provide meaningful learning opportunities for students with diverse abilities and backgrounds.",
      },
      {
        title: "Value Education",
        body:
          "Value education develops moral judgement, responsibility, honesty, respect and concern for society.",
      },
      {
        title: "Educational Technology",
        body:
          "Educational technology uses tools and methods to improve teaching and learning.",
      },
      {
        title: "Digital Literacy",
        body:
          "Digital literacy is the ability to use digital tools safely, critically and effectively.",
      },
      {
        title: "Guidance",
        body:
          "Guidance helps learners understand educational, personal and career choices.",
      },
      {
        title: "Counselling",
        body:
          "Counselling is a supportive process that helps individuals understand and manage personal or educational problems.",
      },
      {
        title: "Motivation",
        body:
          "Motivation refers to forces that encourage and direct learning behaviour.",
      },
      {
        title: "Child-Centred Education",
        body:
          "Child-centred education places the needs, abilities and active participation of learners at the centre of teaching.",
      },
    ],

    longNotes: [
      {
        title: "Meaning and Aims of Education",
        body: `Education develops knowledge, skills, values and personality.

It occurs through schools as well as family, community and experience.

One important aim is intellectual development.

Education should also prepare people for employment and responsible citizenship.

Moral and social development are equally important.

For Mizoram, education has played a major role in social transformation.

The modern challenge is to move beyond certificates toward knowledge, skill and problem-solving ability.

Education should ultimately develop capable and responsible human beings.`,
      },
      {
        title: "Role of Education in Society",
        body: `Education transmits knowledge and culture from one generation to another.

It teaches language, social norms and citizenship.

Education also supports economic development by building skills.

At the same time, education can promote social change.

Schools may challenge discrimination and encourage scientific thinking.

In Mizoram, education contributed to literacy and social transformation.

However, educated unemployment shows that educational achievement must be connected with economic opportunities.

Education is therefore both a social institution and an instrument of development.`,
      },
      {
        title: "Teacher and Classroom Management",
        body: `A teacher is a guide, organiser and facilitator of learning.

Good teaching requires subject knowledge and communication skills.

Classroom management creates an environment where students can learn effectively.

Teachers need to maintain discipline without creating unnecessary fear.

Students differ in ability, confidence and learning speed.

Good teachers adapt methods when necessary.

Modern teachers also use digital tools and support students facing emotional or academic difficulties.

The quality of education depends greatly on the quality of classroom interaction.`,
      },
      {
        title: "Value Education",
        body: `Value education develops moral and social responsibility.

Important values include honesty, respect, discipline, compassion and responsibility.

Academic knowledge without ethical responsibility can be harmful.

Schools therefore play an important role in character development.

Value education should not consist only of lectures about morality.

Students learn values through experience, relationships and the behaviour of adults.

In democratic society, tolerance and respect for equality are especially important.

Education should therefore develop both competence and conscience.`,
      },
      {
        title: "Education in Mizoram",
        body: `Education played a major role in modern Mizo social development.

Missionary activities contributed strongly to literacy and formal schooling.

Today Mizoram has a strong educational culture.

However, high literacy does not automatically guarantee high educational quality.

Problems include educated unemployment, limited technical opportunities and uneven educational resources.

Students increasingly need digital literacy, communication skills and practical training.

Education should also address local issues such as agriculture, environment, governance and entrepreneurship.

Mizoram's next educational challenge is therefore quality and relevance rather than literacy alone.`,
      },
      {
        title: "Inclusive Education",
        body: `Inclusive education aims to provide meaningful learning opportunities for all students.

Learners may differ in physical ability, language, economic background or learning needs.

Inclusive classrooms attempt to reduce unnecessary barriers.

Teachers may adapt teaching methods and learning materials.

Schools should create respectful environments where differences are not treated as weaknesses.

Inclusive education promotes equality and social participation.

It requires trained teachers, supportive infrastructure and cooperation with families.

Education becomes genuinely democratic when different learners can participate effectively.`,
      },
      {
        title: "Educational Technology",
        body: `Educational technology uses digital and non-digital tools to improve learning.

Examples include presentations, videos, online quizzes, learning platforms and educational applications.

Technology can make lessons interactive and provide access to wider resources.

However, technology does not automatically improve education.

Teachers must select tools according to learning objectives.

Students also need digital literacy and cyber safety.

Unequal internet access can create new educational inequality.

Technology should therefore support good teaching rather than replace teachers.`,
      },
      {
        title: "Assessment and Evaluation",
        body: `Assessment collects information about student learning.

Tests, assignments, projects and classroom activities can all provide evidence.

Formative assessment is used during learning to provide feedback.

Summative assessment evaluates achievement at the end of a course or unit.

Evaluation goes beyond marks and judges broader educational effectiveness.

Good assessment should be fair and connected with learning objectives.

Overdependence on memorisation can weaken genuine understanding.

Effective education therefore uses different forms of assessment.`,
      },
      {
        title: "Motivation in Learning",
        body: `Motivation encourages learners to begin and continue learning.

Intrinsic motivation comes from personal interest or satisfaction.

Extrinsic motivation comes from external rewards such as marks or recognition.

Both forms can influence students.

Teachers can improve motivation by making lessons meaningful and achievable.

Encouragement and constructive feedback also matter.

Excessive fear may reduce confidence and curiosity.

Learning becomes stronger when students understand why a subject is useful.`,
      },
      {
        title: "Guidance and Counselling",
        body: `Guidance and counselling support students in educational, career and personal development.

Guidance provides information and direction.

Counselling involves a more personal helping relationship.

Students may require help with course choices, careers or emotional difficulties.

Schools and colleges can provide structured support systems.

Confidentiality and respect are important.

Good guidance helps students make informed decisions.

Educational institutions should therefore support development beyond academic teaching alone.`,
      },
    ],
  },

  // =========================================================
  // ENVIRONMENTAL STUDIES
  // =========================================================
  {
    name: "Environmental Studies",

    shortNotes: [
      {
        title: "Environment",
        body:
          "Environment includes natural and human-made surroundings that affect living organisms.",
      },
      {
        title: "Ecosystem",
        body:
          "An ecosystem is a community of organisms interacting with each other and with the physical environment.",
      },
      {
        title: "Biotic Components",
        body:
          "Biotic components are the living parts of an ecosystem such as plants, animals and microorganisms.",
      },
      {
        title: "Abiotic Components",
        body:
          "Abiotic components are non-living environmental factors such as water, soil, temperature and sunlight.",
      },
      {
        title: "Food Chain",
        body:
          "A food chain shows the transfer of food and energy from one organism to another.",
      },
      {
        title: "Food Web",
        body:
          "A food web is a network of interconnected food chains within an ecosystem.",
      },
      {
        title: "Biodiversity",
        body:
          "Biodiversity refers to variation among genes, species and ecosystems.",
      },
      {
        title: "Conservation",
        body:
          "Conservation means protecting and sustainably managing natural resources and biodiversity.",
      },
      {
        title: "Pollution",
        body:
          "Pollution is contamination of the environment by harmful substances or activities.",
      },
      {
        title: "Air Pollution",
        body:
          "Air pollution occurs when harmful gases, particles or chemicals contaminate the atmosphere.",
      },
      {
        title: "Water Pollution",
        body:
          "Water pollution occurs when harmful substances contaminate rivers, lakes, groundwater or other water sources.",
      },
      {
        title: "Soil Pollution",
        body:
          "Soil pollution is contamination of land by harmful chemicals, waste or other pollutants.",
      },
      {
        title: "Climate Change",
        body:
          "Climate change means long-term changes in global or regional temperature, rainfall and weather patterns.",
      },
      {
        title: "Global Warming",
        body:
          "Global warming refers to the long-term increase in Earth's average temperature.",
      },
      {
        title: "Greenhouse Effect",
        body:
          "The greenhouse effect is warming caused when atmospheric gases trap part of the heat radiated by Earth.",
      },
      {
        title: "Deforestation",
        body:
          "Deforestation is the large-scale removal of forest cover.",
      },
      {
        title: "Renewable Resources",
        body:
          "Renewable resources can naturally regenerate, such as sunlight, wind and flowing water.",
      },
      {
        title: "Non-Renewable Resources",
        body:
          "Non-renewable resources exist in limited quantities and regenerate extremely slowly, such as coal and petroleum.",
      },
      {
        title: "Sustainable Development",
        body:
          "Sustainable development meets present needs without seriously reducing the ability of future generations to meet their needs.",
      },
      {
        title: "Waste Management",
        body:
          "Waste management includes proper collection, segregation, treatment, recycling and disposal of waste.",
      },
    ],

    longNotes: [
      {
        title: "Meaning and Importance of Environment",
        body: `Environment includes the natural and human-made surroundings in which living organisms exist.

Human beings depend on land, water, air and biodiversity.

Environmental degradation therefore directly affects human welfare.

Modern development has increased pollution, waste generation and pressure on natural resources.

Environmental Studies examines these relationships.

For Mizoram, forests and hill ecosystems are particularly important.

Environmental protection is not simply about preserving scenery.

It is closely connected with public health, agriculture, disaster safety and long-term development.`,
      },
      {
        title: "Ecosystem",
        body: `An ecosystem consists of living organisms and their physical environment.

Living components include producers, consumers and decomposers.

Non-living components include sunlight, water, soil and temperature.

Energy generally enters ecosystems through sunlight.

Plants convert solar energy into chemical energy.

Consumers obtain energy by feeding on other organisms.

Decomposers recycle nutrients from dead matter.

Ecosystems therefore depend on continuous energy flow and nutrient cycling.`,
      },
      {
        title: "Biodiversity Conservation",
        body: `Biodiversity includes variation within species, between species and among ecosystems.

It supports ecological stability and human livelihoods.

Mizoram contains rich forest biodiversity because of its location and climate.

Habitat destruction, hunting, pollution and climate change can reduce biodiversity.

Conservation may take place through protected areas and community management.

Local participation is particularly important because communities depend on natural resources.

Conservation should therefore combine environmental protection with sustainable livelihood opportunities.`,
      },
      {
        title: "Climate Change and Society",
        body: `Climate change refers to long-term shifts in temperature and weather patterns.

Human greenhouse gas emissions are now a major driver of global climate change.

Climate impacts include changing rainfall, heat waves, floods and ecosystem stress.

Poor communities are often especially vulnerable.

In hill regions, intense rainfall can increase landslide risks.

Agriculture and water supply may also be affected.

Responses include reducing emissions and improving climate adaptation.

Climate change is therefore both an environmental and social challenge.`,
      },
      {
        title: "Sustainable Development",
        body: `Sustainable development attempts to balance economic growth, social welfare and environmental protection.

People need roads, schools, hospitals and employment.

However, development that destroys ecosystems may create long-term costs.

Sustainable planning considers future generations.

In Mizoram, infrastructure development should recognise fragile hill environments.

Roads and buildings require careful drainage and slope management.

Local economic development can also promote sustainable agriculture and tourism.

Development should therefore be judged by both present benefits and long-term consequences.`,
      },
      {
        title: "Waste Management",
        body: `Waste management includes collection, segregation, treatment and disposal of waste.

Poor waste management causes pollution and public-health problems.

Biodegradable waste can often be composted.

Paper, metal, plastic and glass can be separated for recycling.

Hazardous and medical waste require special treatment.

Hill towns face additional difficulties because suitable disposal land is limited.

Citizens also have responsibility for reducing litter and unnecessary waste.

Good waste management therefore requires both public infrastructure and responsible behaviour.`,
      },
      {
        title: "Air Pollution",
        body: `Air pollution occurs when harmful gases and particles enter the atmosphere.

Sources include vehicles, industries, construction dust and burning of waste.

Air pollution can damage lungs and increase respiratory illness.

Some pollutants also contribute to climate change.

Urban planning and cleaner transport can reduce emissions.

Public awareness is also important.

Air quality should be treated as a public-health issue.

Prevention is usually more effective than dealing with damage later.`,
      },
      {
        title: "Water Pollution",
        body: `Water pollution occurs when harmful substances contaminate water sources.

Sewage, waste, chemicals and agricultural runoff are common causes.

Polluted water harms aquatic ecosystems and human health.

Clean water requires protection of rivers, springs and watersheds.

Wastewater should be treated before discharge.

In hill regions, household waste can easily enter streams during heavy rain.

Protecting water therefore requires both infrastructure and community responsibility.`,
      },
      {
        title: "Deforestation and Forest Conservation",
        body: `Deforestation is the reduction or removal of forest cover.

Forests protect soil, store carbon and support biodiversity.

In hill regions they also help stabilise slopes and watersheds.

Deforestation can increase erosion and reduce habitat.

Forest conservation should involve sustainable resource use.

Community participation can strengthen protection because local people understand local forest conditions.

Afforestation and responsible land management are also important.

Forest conservation therefore supports both ecology and human welfare.`,
      },
      {
        title: "Environmental Problems in Mizoram",
        body: `Mizoram faces several environmental challenges connected with its hill geography.

Landslides can be intensified by heavy rainfall and careless slope cutting.

Urban growth creates waste and drainage problems.

Forest degradation can affect biodiversity and soil stability.

Road development is necessary but must be carefully engineered.

Climate change may increase uncertainty in rainfall patterns.

Environmental protection should therefore be integrated with development policy.

Sustainable Mizoram requires cooperation between government, communities, educational institutions and citizens.`,
      },
    ],
  },
];

export default function CollegeNotesPage() {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0].name);
  const [search, setSearch] = useState("");

  const subject = useMemo(() => {
    return (
      subjects.find((item) => item.name === selectedSubject) ?? subjects[0]
    );
  }, [selectedSubject]);

  const filteredShortNotes = useMemo(() => {
    const term = search.trim().toLowerCase();

    if (!term) return subject.shortNotes;

    return subject.shortNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(term) ||
        note.body.toLowerCase().includes(term)
    );
  }, [search, subject]);

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
        {/* HEADER */}
        <section className="mb-8 rounded-3xl border border-cyan-400/40 bg-slate-900 p-6 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Mizoram Arts College Notes
          </p>

          <h1 className="mt-3 text-4xl font-bold text-cyan-300 md:text-6xl">
            College-Level Free Study Notes
          </h1>

          <p className="mt-4 max-w-4xl text-slate-300">
            Easy-to-study college notes for Mizoram students. Choose a subject,
            search a topic and read short revision notes or longer exam-style
            explanations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              ← Back to Mock Test
            </Link>
          </div>
        </section>

        {/* SUBJECT BUTTONS */}
        <section className="mb-6 flex flex-wrap gap-3">
          {subjects.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setSelectedSubject(item.name);
                setSearch("");
              }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selectedSubject === item.name
                  ? "bg-cyan-400 text-slate-950"
                  : "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
              }`}
            >
              {item.name}
            </button>
          ))}
        </section>

        {/* SEARCH */}
        <section className="mb-6 rounded-3xl border border-cyan-400/30 bg-slate-900 p-5">
          <label className="text-sm font-semibold text-cyan-300">
            Search inside {subject.name}
          </label>

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search topic or keyword..."
            className="mt-3 w-full rounded-2xl border border-cyan-400/40 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
          />

          {search && (
            <p className="mt-3 text-sm text-slate-400">
              Found {filteredShortNotes.length} short note
              {filteredShortNotes.length !== 1 ? "s" : ""} and{" "}
              {filteredLongNotes.length} long note
              {filteredLongNotes.length !== 1 ? "s" : ""}.
            </p>
          )}
        </section>

        {/* NOTES */}
        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* SHORT NOTES */}
          <div className="rounded-3xl border border-cyan-400/40 bg-slate-900 p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-cyan-300">
                Short Notes
              </h2>

              <span className="rounded-full border border-cyan-400/30 bg-slate-950 px-3 py-1 text-xs text-slate-400">
                {filteredShortNotes.length}
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-400">{subject.name}</p>

            <div className="mt-5 space-y-4">
              {filteredShortNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-2xl border border-cyan-400/20 bg-slate-950 p-4 transition hover:border-cyan-400/40"
                >
                  <h3 className="font-bold text-white">{note.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {note.body}
                  </p>
                </article>
              ))}

              {filteredShortNotes.length === 0 && (
                <p className="rounded-2xl border border-red-400/40 bg-red-400/10 p-4 text-red-200">
                  No short note found for this search.
                </p>
              )}
            </div>
          </div>

          {/* LONG NOTES */}
          <div className="rounded-3xl border border-cyan-400/40 bg-slate-900 p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-cyan-300">
                Long Notes
              </h2>

              <span className="rounded-full border border-cyan-400/30 bg-slate-950 px-3 py-1 text-xs text-slate-400">
                {filteredLongNotes.length}
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-400">{subject.name}</p>

            <div className="mt-5 space-y-5">
              {filteredLongNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-2xl border border-cyan-400/20 bg-slate-950 p-5 transition hover:border-cyan-400/40"
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
                  No long note found for this search.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section className="mt-8 rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-5 text-center">
          <p className="text-sm text-slate-400">
            Free study material for students. Keep learning. 📖
          </p>
        </section>
      </div>
    </main>
  );
}