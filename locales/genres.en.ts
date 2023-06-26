const names = {
  action: 'Action',
  adventure: 'Adventure',
  racing: 'Racing',
  comedy: 'Comedy',
  'avant garde': 'Avant Garde',
  mythology: 'Mythology',
  mystery: 'Mystery',
  drama: 'Drama',
  ecchi: 'Ecchi',
  fantasy: 'Fantasy',
  'strategy game': 'Strategy Game',
  hentai: 'Hentai',
  historical: 'Historical',
  horror: 'Horror',
  kids: 'Kids',
  'martial arts': 'Martial Arts',
  mecha: 'Mecha',
  music: 'Music',
  parody: 'Parody',
  samurai: 'Samurai',
  romance: 'Romance',
  school: 'School',
  'sci-fi': 'Sci-Fi',
  shoujo: 'Shoujo',
  'girls love': 'Girls Love',
  shounen: 'Shounen',
  'boys love': 'Boys Love',
  space: 'Space',
  sports: 'Sports',
  'super power': 'Super Power',
  vampire: 'Vampire',
  harem: 'Harem',
  'slice of life': 'Slice of Life',
  supernatural: 'Supernatural',
  military: 'Military',
  detective: 'Detective',
  psychological: 'Psychological',
  suspense: 'Suspense',
  seinen: 'Seinen',
  josei: 'Josei',
  'award winning': 'Award Winning',
  gourmet: 'Gourmet',
  workplace: 'Workplace',
  erotica: 'Erotica',
  'adult cast': 'Adult Cast',
  anthropomorphic: 'Anthropomorphic',
  cgdct: 'CGDCT',
  childcare: 'Childcare',
  'combat sports': 'Combat Sports',
  delinquents: 'Delinquents',
  educational: 'Educational',
  'gag humor': 'Gag Humor',
  gore: 'Gore',
  'high stakes game': 'High Stakes Game',
  'idols (female)': 'Idols (Female)',
  'idols (male)': 'Idols (Male)',
  isekai: 'Isekai',
  iyashikei: 'Iyashikei',
  'love polygon': 'Love Polygon',
  'magical sex shift': 'magical sex shift',
  'mahou shoujo': 'Mahou Shoujo',
  medical: 'Medical',
  'organized crime': 'Organized Crime',
  'otaku culture': 'Otaku Culture',
  'performing arts': 'Performing Arts',
  pets: 'Pets',
  reincarnation: 'Reincarnation',
  'reverse harem': 'Reverse Harem',
  'romantic subtext': 'Romantic Subtext',
  showbiz: 'Showbiz',
  survival: 'Survival',
  'team sports': 'Team Sports',
  'time travel': 'Time Travel',
  'video game': 'Video Game',
  'visual arts': 'Visual Arts',
  crossdressing: 'Crossdressing'
}

const descriptions = {
  action:
    "Exciting action sequences take priority and significant conflicts between characters are usually resolved with one's physical power. While the overarching plot may involve one group against another, the narrative in action stories is always focused on the strengths/weaknesses of individual characters and the effort they put into their personal battles with the opposing group's members. Contrast with Military or Sports where the narrative is on collective achievement, or monster-of-the-week where the brief action scenes are a predicted climax to the episode's plot.",
  adventure:
    "Whether aiming for a specific goal or just struggling to survive, the main character is thrust into unfamiliar situations or lands and continuously faces unexpected dangers. The narrative of adventure stories is always on how the characters react to sudden events or trials during the journey, indicating personal growth or setback based on which actions or choices are taken. Character development as a response to the journey's dangers is a requirement of adventure stories. Simply experiencing foreign lands or worlds is not adventure.",
  racing: '',
  comedy:
    'Uplifting the audience with positive emotion takes priority, eliciting laughter, amusement, or general entertainment. Almost always, comedy stories are episodic or have happy endings. Nearly every work will use comedy as a plot device to relieve tension, but the overarching narrative must be focused on evoking amusement to be Comedy. Drama and Comedy are not mutually exclusive, but mixing them requires the audience facing human struggle with lightheartedness. Slice of Life and Comedy are incompatible by definition.',
  'avant garde':
    "Experimental fiction which shunned conventional storytelling at the time it was created. These stories often invoke unsettled feelings because they reject traditional ways in which we prefer to view (or escape from) the world. Narrative is avant garde works is often of higher importance than the content. Deconstructions often fall into this genre. Note that simply being darker, edgier, or cynical doesn't mean the work is avant garde.",
  mythology: '',
  mystery:
    'Whether its solving a crime or finding an explanation for a puzzling circumstance, the main cast willingly or reluctantly become investigators who must work to answer the who, what, why, and/or how of the current dilemma. The narrative of mystery stories is always on collecting evidence, identifying suspects, and theorizing possible scenarios for the unexplainable, before finally capturing the perpetrator or resolving the current situation. Almost always, the audience has the same information as the main characters and anticipation is directed towards discovering the explanation, not what will transpire after the answer is found. Contrast with Suspense or Horror where often the audience has more information than the cast, which heightens the tension or fear of what will happen next.',
  drama:
    'Plot-driven stories focused on realistic characters experiencing human struggle. Because drama stories ask the question of what it means to be human, the conflict and emotions will be relatable, even if the settings or characters themselves are not. Here, you will see humanity at its worst, its best, and everything in between. Simply having a serious tone, dramatic moments, or evoking tears does not equal Drama. If the narrative focuses on eliciting emotional reactions rather than on characterization, then it is melodrama and not Drama. Slice of Life and Drama are incompatible by definition.',
  ecchi:
    "Etchi is mostly aimed at a male audience. It is a subspecies of hentai. In anime and manga, men are portrayed as strong and muscular, while women are gifted with emphatically seductive forms. The main purpose of the genre is to hint at the viewer's unambiguous relationship of the characters. In ethno you can often see the characters' underwear and some naked body parts. There are no sexual scenes in such anime, but there are scenes with erotic content and romantic feelings towards characters of the opposite sex. The main difference between etti and hentai is the absence of sexual relations; in etti there is only a hint of them.",
  fantasy:
    'Magical powers, unnatural creatures, or other unreal elements which cannot be explained by science are prevalent and normal to the setting they exist in. Fantasy stories can take place on Earth (urban fantasy) or in another world. Character traits (e.g. magician vs demon/spirit) and setting do not determine if a story is Fantasy. If majority of the cast has magical or supernatural powers (e.g. one normal highschool boy surrounded by five goddesses), then the story is Fantasy. If only a few characters have powers and most of the cast would be in disbelief to discover this (e.g. one man is an exorcist and the rest are normal adults), then the story is Supernatural. Sometimes a story can be both Fantasy and Supernatural, but this is rare. When searching for High Fantasy stories, excluding lower fantasy themes (e.g. Mythology, Superpower) can help refine your search.',
  'strategy game': '',
  hentai:
    'Hentai anime and manga are intended mainly for a male audience. A distinctive feature of hentai is the presence of erotic and sexual scenes. In other words, it is drawn porn. Because this kind of anime is created for a particular, narrow audience, the quality of the graphics is often low, and the hentai itself is usually released in OVA format. Heterosexual relationships are most often depicted. This genre is characterized by the demonstration of various types of sexual deviations: rape, cruelty, interspecies relations, for example, when the heroine is raped by tentacles (also tentacula), etc.',
  historical:
    'This genre is intended for a wide audience. The actions in anime and manga are related to certain historical events. Most often these are episodes from the history of Western Europe, Japan or China. The actions described may correspond to reality or be fictional.',
  horror:
    'Creating—and maintaining—a sense of dread in the audience takes priority, eliciting shock, fear, or disgust through atmosphere and frightening scenarios. Mood must be of equal or greater importance than setting and characterization in horror stories. Almost always, the main cast will be under constant threat of danger. Many stories can incorporate elements of horror as a plot device to unnerve the audience, but the overarching narrative must be focused on evoking and maintaining apprehension to be Horror. Contrast with Suspense where the audience craves to know what will happen next rather than fearing it.',
  kids: "Anime and manga of this genre are mainly aimed at a children's audience. The works have a positive, life-affirming character. Scenes of violence, cruelty are absent or have a humorous tone. Negative characters are sometimes made so that even with a visual perception sharply contrasted with the positive, and even the lack of replicas heroes did not leave any doubt in the sympathy of the young viewer or reader. Moral and moral issues requiring deep reflection are not raised, if they are present, their understanding lies on the surface.",
  'martial arts':
    'Martial arts - martial arts and self-defense systems of various origins. The main audience is boys, young men, and just lovers of martial arts. The central line of the story is the study of some kind of martial art. Particular attention is paid to the development of skills and growth of strength of the characters. With the help of their outstanding abilities, the heroes deal with enemies and win competitions.',
  mecha:
    'This is a sci-fi genre whose hallmark is humanoid machines, most often used in combat. The main characters are the characters controlling these robots from within. The main emphasis is on the contact and synchronization of humans and machines. A characteristic feature of the mech is the detailed description of starting up such a machine and interacting with it.',
  music:
    'The anime or manga is about music and musicians, the difficulties of achieving a musical dream and a musical career.',
  parody:
    'Parodies of anime or manga usually mock other genres with grotesque and satirical language. Characteristics of a particular genre or genres are hyperbolized and reduced to the point of absurdity.',
  samurai:
    'The main characters in this anime or manga are samurai. Much attention is given to the samurai code of honor, bushido, and the exploits and adventures of the samurai. The action usually takes place against a historical background. Sometimes the main characters are ninja.',
  romance:
    'Falling in love and struggling to progress towards—or maintain—a romantic relationship take priority, while other subplots either take backseat or are designed to develop the main love story. The narrative focuses on the thoughts and emotions of the characters, illustrating the connections between them and explaining their reactions to events or conflict. Almost always, the story ends happily and the couple is rewarded for their efforts with lasting love. Romance stories require significant romantic development leading to some kind of conclusion: either to begin the relationship, continue it, or end it. Open-ended romantic endings are only acceptable when the work is an incomplete adaptation of a Romance source. "Teasing" stories which do not narrate significant romantic development but have a conclusion should be tagged Romantic Subplot. A story can be simply Romance. Since they are plot-driven stories showing humans experiencing romantic struggle, most Romance has some Drama inherently. For both tags, the drama should be focused not only on the relationship but also on the side storylines; for example, one character overcoming the death of a loved one or a drug addiction. Comedy requires Romance narratives to be focused on eliciting laughter, not only using comedy for lightheartedness. Slice of Life and Romance are incompatible by definition.',
  school:
    'Since the genre is about everything related to school, the main audience is teenagers. The main focus is on school problems, including relationships with peers, parents and teachers, identity formation and self-determination. The main action takes place in clubs, trips, festivals, etc.',
  'sci-fi':
    'Imagined technological advancements or natural settings which are currently unreal in the present day but could be invented, caused, or explained by science in the future. The narrative of science fiction (Sci-Fi or SF) stories focuses on the societal or individual reprecussions caused by the imagined technology or natural phenomenon, and are frequently dystopian in nature. Sufficient world-building is required for a work to be Sci-Fi; an alien simply visiting from outer space and living on Earth with unusual powers would be Supernatural. Characters in Sci-Fi stories can have unnatural powers without a Fantasy/Supernatural tag, but there should be a plausible scientific reason for these powers described by the creator. A futuristic setting with impossible, unexplained powers (e.g. humans randomly evolved to control the weather via thought) would be Fantasy.',
  shoujo:
    'Shojo anime and manga are aimed at girls and young women, where the emphasis is on feelings and relationships between characters. The greatest emphasis is on friendship and love, but there may also be everyday trivia, the nuances of specific relationships, and worries about philosophical issues. The female characters are all very attractive, and the anime often uses beautiful graphics.',
  'girls love':
    'Same-sex romantic/sexual relationships between women are the focus of these stories. The term Yuri is commonly used to refer to this media in Japan, while Girls Love and its abbreviation GL is used to a lesser extent. The terms Shoujo Ai (romantic/non-sexual) and Yuri (sexual) have often been used in the West; however, shoujo ai has a very different meaning in Japan. On MAL, Girls Love is chosen to match Boys Love and explicit genres (Ecchi, Erotica, Hentai) are used to indicate the sexual content level.',
  shounen:
    'Shonen anime and manga are mainly aimed at boys or young men between the ages of 12 and 18. At the center of the story is a strong and charismatic character who perseveres to achieve his goals (often difficult to achieve) in certain areas (e.g. sports, music, etc.). The hero of the senen is a kind, fair, lucky guy who opposes the forces of evil. The plot in such anime develops rapidly: the main character and his friends will experience a lot of interesting adventures, funny incidents, take part in difficult competitions, etc.',
  'boys love':
    'Same-sex romantic/sexual relationships between men are the focus of these stories. The term Boys Love and its abbreviation BL are commonly used to refer media written by women for female audiences in Japan, while the term Bara is often used for media written by men for male audiences. In the West, the terms Shounen Ai (romantic/non-sexual) and Yaoi (sexual) are more commonly used for BL. On MAL, Boys Love combines all homosexual relationships between men and explicit genres (Ecchi, Erotica, Hentai) are used to indicate the sexual content level. This means most Shounen Ai stories have no explicit genres, most Yaoi are labelled Ecchi or Erotica, and most Bara are labelled Hentai.',
  space: '',
  sports:
    "Training for and participating in a sport take priority, with the goal of furthering one's athletic abilities—either to win a competition or achieve some social standing. While the featured sport may be individual or team, the main cast will always overcome conflict through discussion and insights gained from other athletes or coaches. This creates a general sense of collective support and achievement that is always present in Sports stories. Contrast with Action where the narrative is on resolving conflict with one's physical power. While both Action and Sports may focus on exciting action sequencies, the two genres are mutually exclusive.",
  'super power':
    'In anime and manga of this genre, heroes are endowed with enhanced physical abilities. The nature of superpowers can be fantastical or mystical in nature. Superpowers can be an innate trait of the wearer - an alien alien, a mystical creature, etc., or acquired by ordinary people as a result of, for example, exposure to a factor, interaction with an object, or an increase in physical strength achieved through the application of spiritual power. Superpowers can be a permanent characteristic of the wearer, or they can be manifested when necessary.',
  vampire:
    'The main characters of this genre are ghouls, ghouls, strigoi, lamia, vetals, etc. The characters can be different. They are perpetually alive, afraid of the light, garlic and the cross, but they are also strong, mad, not reflected in mirrors, tragic, funny, but all as one wanting one thing: blood.',
  harem:
    'Anime or manga of this genre have features of comedic and romantic nature and are designed for a wide audience. Usually the plot involves the main character in love stories with more than 3 members of the opposite sex. The main focus is most often on figuring out the relationship between the characters.',
  'slice of life':
    "Slice of Life stories are focused on a seemingly random and mundane period of the main characters' lives. The absence of a central plot to carry the story towards a charted destination means Slice of Life stories frequently lack overarching conflict and resolution. While life is not without conflict and Slice of Life neither, here conflict appears and dissipates seemingly at will, without a specific narrative to enforce it. Slow story pacing or episodic storytelling does not equal Slice of Life. Drama/Romance stories can be slow and soft while maintaining a central plot of human/relationship struggle. Comedy stories may lack progress and have mundane settings, but they have narratives focused on eliciting laughter rather than amusing moments happening naturally. Thus, Slice of Life is incompatible with Comedy, Drama, and Romance by definition.",
  supernatural:
    'Primarily taking place on Earth, supernatural stories incorporate elements or attributes that are unnatural and unexplainable by science. Creatures common in folklore (ghosts, vampires) or humans with metaphysical powers (telekinesis, mind reading) are often featured. Character traits (e.g. demon/spirit) and setting alone do not determine if a story is Supernatural. If only a few characters have powers and most of the cast would be in disbelief to discover this (e.g. one man is an exorcist and the rest are normal adults), then the story is Supernatural. If majority of the cast has magical or supernatural powers (e.g. one normal highschool boy surrounded by five goddesses), then the story is Fantasy. Sometimes a story can be both Supernatural and Fantasy, but this is rare. When searching for stories featuring creatures, spirits, or gods from folklore, the Mythology and Vampire themes can help refine your search. For superhero stories, please refer to Mahou Shoujo or Superpower.',
  military:
    'The works of this genre demonstrate the functioning of various military formations from historically authentic armies, to a band of mercenaries or a group of combat robot pilots. As a rule, there are fighting clashes from individual fights to large-scale battles of armies of large numbers. The main emphasis in the work may also be on demonstrations of military equipment, weapons, various tactics, or the humanitarian aspect of the consequences of wars.',
  detective:
    'A theme within the Mystery genre, these stories feature either a detective or amateur investigator working to solve a crime or puzzling event. To classify as Detective, the character must either by employed as an investigator (e.g. police officer, private detective) or be sought out by enforcement/clients because of their case-solving reputation (e.g. Sherlock). If the character only seeks out mysteries as a hobby or becomes embroiled in them randomly, then the Detective theme does not apply. Anti-heroes being pursued by enforcement is not Detective.',
  psychological:
    'The main purpose of such an anime or manga is to show how human psychology works. The most popular plot is how a clever character uses his knowledge of psychology to achieve his own goals.',
  suspense:
    'Instilling a sense of anticipation and excitement takes priority, and is accomplished with a narrative that is rife with twists, turns, and red herrings. Uncertainty is present every step of the way, often drawn out for maximum effect. A variety of tools are used to keep the audience on the edge of their seats, such as withholding important information, intentional misdirection, or even outright subversion of expectations. Suspenseful moments do not mean a work is Suspense; the feeling of anticipation or anxiety must be maintained throughout the story. Contrast with Horror where the audience is in a constant state of apprehension and dreads the next event, rather than craving it. While Mystery also instills anticipation, the tension is focused on discovering the solution to a puzzle, rather than knowing what the characters will do next. Sometimes a story can mix Suspense with Horror or Mystery, but this is rare.',
  seinen:
    "Seinen anime and manga are intended for a male audience of 18 years or older. Unlike shōnen, the themes in shōnen are more mature. The main character is often a strong, charismatic and intelligent guy who solves serious problems in life, so the focus is on revealing the characters' characters and their thoughts, rather than active actions. Often a shainen contains gory or erotic scenes. In such a way, it is possible to see the difference between black and white, and the cruel, unpredictable, and unstoppable truths of life. And one's life is merely the result of one's worldview and «the efforts made in proportion to the efforts made by others»",
  josei:
    'Jyosei is a genre of anime and manga aimed at young women ages 18 and older. Usually josei describes "adult" problems, no longer girls, but also not yet women. The plot is centered on relationships, often romantic and sexual. Often there is erotica. Love relationships in josei are shown in a more realistic way than in shoujo.',
  'award winning':
    'Titles which have won prestigious or professional awards in Japan. Examples include the Tokyo Anime Award or Japan Media Arts Festival awards.',
  gourmet:
    "Preparation and consumption of food or drink take focus in gourmet stories and the narrative is designed to feature numerous different dishes or beverages. Characters are often chefs or food connoisseurs, and special attention is given to all steps in the cooking process, ranging from detailed descriptions of recipes to the characters' often over-the-top reactions when tasting the finished product. Gourmet should only be double-tagged with Workplace when the social interactions between multiple employees in the same work environment are equal in focus to the food/drink.",
  workplace: '',
  erotica: '',
  'adult cast': '',
  anthropomorphic: '',
  cgdct:
    'Stands for "cute girls doing cute things". It\'s a popular anime genre which involves a lot of "moe" and it\'s usually aimed at older male audience(Seinen).',
  childcare: '',
  'combat sports':
    'Individual sports which involve one-on-one physical confrontations. This theme includes sports such as boxing, wrestling, karate, judo etc. Since Combat Sports is a theme within the Sports genre, these stories must have matches held in a competitive or organized setting.',
  delinquents: '',
  educational: '',
  'gag humor': '',
  gore: '',
  'high stakes game': '',
  'idols (female)': '',
  'idols (male)': '',
  isekai: '',
  iyashikei:
    'The Japanese word "iyashi" (癒し) means healing, and the term "iyashikei" refers to anime and manga that "heal" the audience by instilling a calming feeling or evoking emotional catharsis. Almost always, Iyashikei stories have peaceful, somewhat mundane, and nostalgic atmospheres. The settings are idyllic with little or no conflict, and the narratives focus on personal reflection, heartwarming moments, a vague sense of melancholy, and/or an appreciation for the small things in life. Iyashikei is a theme within the Slice of Life genre, and thus the conditions for both defintions must be met for the tag. Pets-themed stories are a subcategory of Iyashikei, so they are not double-tagged.',
  'love polygon': '',
  'magical sex shift':
    "One or more main characters in these stories identify as their biological sex, but their body is suddenly changed to the opposite sex through magical means. This Magical Sex Switch may be temporary, irreversible, or allow the character to change back and forth between the two. Since the character's original identity is not lost, coming to terms with the magical sex switch or finding a method to change back should play a central role in the plot. Trading bodies between opposite sexes is Body Swap themed. Dying or being killed, and then being reborn as the opposite sex, is Reincarnation.",
  'mahou shoujo': '',
  medical: '',
  'organized crime': '',
  'otaku culture':
    'Otaku is a term in used in modern Japan to refer to people with obsessive interests. Outside of Japan, it specifically denotes people who have a heavy interest in anime, manga, and other Japanese culture or entertainment. Otaku Culture themed stories have a plot which is related to the hobbies or occupation of a main cast who are heavily involved in anime-related media. Characters could be creating anime or manga (professionally or casually with friends), attending conventions or idol concerts, dressing up in cosplay, etc. Please note stories focusing on seiyuu (voice acting) fall under the Showbiz theme due to their celebrity status.',
  'performing arts':
    'The main cast of these stories practice and perform live while using their body movements and/or voice as a form of artistic expression. Performing Arts are meant to capture attention with artistic beauty and deliver an unspoken message which evokes emotion in the audience. Often, characters will discuss the meanings behind classical sequences by renowned creators, or will strive to create their own. Primary examples of Performing Arts are dance, theater, and opera, but the theme also includes other forms of artistic expression such as choreographed circus sequences, folk music, or rakugo. Popular contemporary music (e.g. idols, rock bands) is not included in Performing Arts.',
  pets: '',
  reincarnation: '',
  'reverse harem': '',
  'romantic subtext':
    'Romantic Subtext is a narrative which can at first appear to be Romance. These plots feature one or more main couples which seem to have romantic interest in each other, and whose relationship(s) will be central to the main story. However, while the story will set the couple up for heartwarming or embarrassing moments, these encounters will not lead to any significant romantic development, and the characters will not strive to deepen the relationship beyond a certain boundary. Some early indicators of Romantic Subtext include a missing emotional throughline (lack of personal reflection which allows the characters to understand their feelings and share these with the audience) and a lack of any conflict which will deepen or drive the relationship apart. Almost always, Romantic Subtext is a theme under the Comedy genre and these stories have plots designed to uplift the audience with positive emotion or amusement. Not to be confused with Romantic Sideplot, where a Romance narrative is side story to another main genre plot (e.g. Action or Adventure). Romance and Romantic Subtext are mutually exclusive by definition. Harem and Reverse Harem may fall into a similar pattern of absent romantic development, but will not be double-tagged.',
  showbiz:
    "Show business, or Showbiz for short, describes the industry which produces popular entertainment media such as television shows, movies, radio programs, magazines, and mainstream contemporary music. One or main characters in Showbiz themed stories work in the entertainment industry, either as a performer (e.g. actress, model) or in business development (e.g. manager, producer). Their occupation should also be central to the main story's plotline. For example, simply dating a famous band member but never seeing that character perform or struggle with their profession is not Showbiz. Idols-themed stories are a subcategory of Showbiz, so they are not double-tagged with Idols (female) or Idols (male). Stories featuring a main cast of both female and male idols equally is rare, so those will be have the Showbiz theme.",
  survival: '',
  'team sports':
    "Sports which require multiple athletes on one team to compete against multiple athletes on another team, within same playing field and at the same time. Team Sports narratives focus on improving one team's collective performance, and frequently require its members to deepen their relationships with each other in order to bring out each member's strengths. This theme includes many ball games such as baseball, volleyball, basketball, rugby, hockey, etc.",
  'time travel': '',
  'video game': '',
  'visual arts':
    'The main cast of these stories practice and create physical objects for visual perception using tools and established art forms. Characters will study established techniques and/or strive to create new pieces of art work for designated projects or to sell professionally. Visual Arts includes artistic methods such as drawing, painting, photography, sculpture, ceramics, calligraphy, etc. Popular contemporary art forms (e.g. manga, anime) are not included in Visual Arts.',
  crossdressing:
    "One or more main characters in these stories identify as their biological sex, but routinely dress in a way that results in them being mistaken for the opposite sex. Since the act of crossdressing must be a central theme, often the main character is trying to hide their identity or achieve some goal. If the character simply enjoys crossdressing, the narrative should be focused on how the important people in the character's life react to or come to accept it. One main character dressing as the opposite sex for reasons unrelated to the central plot is not Crossdressing."
}

export const genres = { name: names, description: descriptions }
