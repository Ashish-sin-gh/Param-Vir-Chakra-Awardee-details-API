const express = require('express');
const app = express();
const port = 8000;

const object = {
    'somnath Sharama':{
        'date': '03-nov-1947',
        'name': 'Somnath Sharama',
        'rank': 'major',
        'details': 'On 03 Nov 1947, Major Somnath Sharma\'s company of 4 KUMAON was ordered on a fighting patrol to Badgam in response to the invasion by Pakistan forces in Srinagar. The enemy, estimated at about 500, attacked his company position from three sides with the intention of capturing the Srinagar airfield. Major Somnath Sharma led his company to fight the enemy with dogged determination. With extreme bravery he kept rushing across the open ground to his troops, skilfully directed their fire onto the enemy, until a mortar shell exploded near him. His inspiring leadership led his troops to keep fighting for many hours after his death, thus stalling the enemy attack. For exhibiting an act of inspiring leadership, conspicuous gallantry and supreme sacrifice, he was awarded the Param Vir Chakra (Posthumous).'
    },

    'jadunath singh':{
        'date': '6-feb-1948',
        'name': 'Jadunath Singh',
        'rank': 'Naik',
        'details':'Naik Jadunath Singh of 1 RAJPUT was a post commander at Tain Dhar near Naushera in Jammu & Kashmir. On 6 February 1948, enemy forces attacked his post in successive waves. He and his section were able to ward off three successive attacks by the enemy. By the end of third wave, of the 27 men at the post, 24 men were killed or severely wounded. Despite being grievously injured, armed with a Sten Gun, he single-handedly charged with such courage as to cause the attackers to withdraw. With raw courage and utter disregard to his personal safety, he attacked the enemy forces and met his gallant death during the charge. For this act of highest gallantry and supreme sacrifice he was awarded the Param Vir Chakra (Posthumous).'
    },

    'rama raghoba rane':{
        'date': '08-april-1948',
        'name': 'Rama Raghoba Rane',
        'rank': 'Second Lieutenant',
        'details':'On 08 April 1948, Second Lieutenant Rama Raghoba Rane of Bombay Sappers, was in charge of the mine and roadblock clearing party at Mile 26 on Naushera-Rajouri road. The enemy started heavy shelling of the area, killing two and injuring five of the mine clearing party. Despite being wounded Second Lieutenant Rane crouched under a monstrous Stuart tank and began crawling with it. He synchronized himself with the movements of dangerous tank wheels and navigated the tank through the minefield and directed its movement by a rope tied to the tank driver, thus, securing a safe lane for the advancing Indian tanks. For displaying conspicuous bravery and gallantry of the highest order in the face of the enemy he was awarded the Param Vir Chakra.'
    },

    'piru singh':{
        'date': '18-july-1948',
        'name': 'Piru Singh',
        'rank': 'Company Havildar Major',
        'details': 'On 18th July 1948, CHM Piru Singh of 6 RAJ RIF was tasked to attack and capture an enemy occupied hill feature at Thithwal in Jammu & Kashmir. As the attack advanced, they met with heavy MMG fire and a volley of grenades. More than half of the section were killed or wounded. CHM Piru Singh urged the remaining men to continue fighting and destroyed two MMG positions despite being wounded. He suddenly realized that he was the sole survivor. When the enemy lobbed another grenade at him, he crawled forward with blood dripping from his face and destroyed the enemy position before breathing his last. For exhibiting the most conspicuous valour, indomitable gallantry and for making the supreme sacrifice, he was awarded the Param Vir Chakra (Posthumous).'
    },

    'karam singh':{
        'date': '13-oct-1948',
        'name': 'Karam Singh',
        'rank': 'Lance Naik',
        'details': 'On 13 October 1948, Lance Naik Karam Singh of 1 SIKH was commanding a section at Richhmar Gali in Jammu & Kashmir. The enemy commenced its attack with heavy shelling of guns and mortars, which damaged all bunkers of the post. Despite being wounded and bleeding profusely, Lance Naik Karam Singh went from bunker to bunker, giving succour to his comrades and motivated them to fight. The enemy launched eight separate attacks that day. In each and every attack, Lance Naik Karam Singh encouraged and pepped up his buddies, while fighting the enemy. His section finally launched a counter attack and charged at the enemy with their bayonets to defend Richhmar Gali. For conspicuous courage and indomitable gallantry under extreme adverse circumstances, Lance Naik Karam Singh was awarded the Param Vir Chakra.'
    },

    'gurbachan singh salaria':{
        'date':'5-dec-1961',
        'name':'Gurbachan Singh Salaria',
        'rank':'Captain',
        "details":'On 05 December 1961, 3/1 GORKHA RIFLES was ordered to clear a roadblock established by Katangese troops in Elizabethville, Katanga. When Captain Salaria tried to link up with the Gorkha Company to reinforce the roadblock, he met strong enemy opposition. The enemy brought down heavy automatic fire on his force. Captain Salaria\'s men charged the enemy with bayonets, khukris and hand grenades, killing 40 of the enemy and destroying two enemy cars. Captain Salaria, despite being wounded in the neck, continued fighting, till he succumbed to his injuries. His bold and courageous action completely demoralised the enemy, who fled despite the numerical superiority, thus saving the UN Headquarters in Elizabethville. For his extraordinary leadership and most conspicuous bravery, Captain Gurbachan Singh Salaria was awarded the Param Vir Chakra (Posthumous).'
    },

    'dhan singh thapa':{
        'date':'20 October 1962',
        'name': 'Dhan Singh Thapa',
        'rank': 'Major',
        'details': 'Major Dhan Singh Thapa of 1/8 GORKHA RIFLES was in command of a forward post in Ladakh. On 20 October 1962, his post was attacked by Chinese troops in overwhelming strength after intense artillery and mortar bombardment. Under his leadership, the greatly outnumbered post repulsed the attack, inflicting heavy casualties on them. The enemy attacked a second time and met a similar fate. The Chinese attacked for the third time, with infantry supported by tanks. Though considerably reduced in number, the post held out to the last. Major Dhan Singh Thapa killed several enemy soldiers in hand-to-hand combat before he was finally overpowered. Major Thapa\'s courage, conspicuous gallantry and leadership were in the highest traditions of the Army, for which he was awarded the Param Vir Chakra.'
    },

    'joginder singh':{
        'date': '23-oct-1962',
        'name': ' Joginder Singh',
        'rank': 'Subedar',
        'details': 'On 23 October 1962, Subedar Joginder Singh\'s platoon of 1 SIKH repulsed two Chinese attacks in Bumla, Arunachal Pradesh, wherein the enemy suffered heavy losses. His platoon had by then lost half its men. The JCO was wounded in the thigh but refused to be evacuated. Under his inspiring leadership, the platoon stubbornly held its ground, when the position was attacked for the third time. Subedar Joginder himself manned an LMG and shot down a number of enemy troops. Ultimately their ammunition got exhausted. Subedar Joginder motivated and led his men into a bayonet fight and attained martyrdom while fighting numerically superior enemy in this epic battle. For exhibiting an act of conspicuous gallantry, inspiring leadership, indomitable courage and supreme sacrifice, he was awarded the Param Vir Chakra (Posthumous).'
    },

    'shaitan singh': {
        'date': '18-nov-1962',
        'name': 'Shaitan Singh',
        'rank': 'Major',
        'details': 'Major Shaitan Singh was commanding a company of 13 KUMAON at Rezang La in Jammu & Kashmir at a height of about 17,000 feet. On 18 November 1962, Chinese troops attacked his location with overwhelming strength. Major Shaitan Singh dominated the scene of operations and moved from one platoon post to another at great personal risk, sustaining the morale of his troops. Despite being grievously wounded he continued to encourage and lead his men, who, following his brave example fought gallantly and inflicted heavy casualties on the enemy. When his men tried to evacuate him, he refused and kept motivating them to keep fighting, till he breathed his last. For his conspicuous bravery, inspiring leadership and supreme sacrifice, he was awarded the Param Vir Chakra (Posthumous).'
    },

    'ardeshir burzorji tarapore':{
        'date':'11-sept-1965',
        'name':'Ardeshir Burzorji Tarapore',
        'rank':'Lietenant Colonel',
        'details': 'Lieutenant Colonel Ardeshir Burzorji Tarapore was the Commanding Officer of POONA HORSE Regiment in Sialkot sector during 1965 War. On 11 September 1965, Lieutenant Colonel Tarapore\'s Regiment was counter attacked by the enemy\'s heavy armour. The Regiment defied enemy\'s charge, held its ground and gallantly attacked Phillora. Despite being wounded, Lieutenant Colonel Tarapore refused to be evacuated and led his Regiment to capture Wazirwali, Jassoran and Butur-Dograndi. Inspired by his leadership, POONA HORSE destroyed 60 Pakistan tanks. However, Lieutenant Colonel Tarapore\'s tank was hit by a shell, enveloped in flames and he died a hero\'s death. The valour displayed by him for six days, was in keeping with the highest traditions of the Indian Army, for which he was awarded the Param Vir Chakra (Posthumous).'
    },

    'abdul hamid':{
        'date':'10-sept-1965',
        'name':'Abdul Hamid',
        'rank':'CQMH',
        'details': 'CQMH Abdul Hamid was serving in 4 GRENADIERS in Khem Karan Sector during the Indo-Pak War of 1965. On 10 September 1965, Pakistan forces launched an attack with Patton tanks in Khem Karan sector. CQMH Abdul Hamid, who was commander of a jeep-mounted RCL Gun Detachment, moved to a flanking position. Under intense enemy shelling and tank fire, he knocked out the leading enemy tank and then swiftly changing his position, destroyed another tank. By this time, the enemy tanks in the area had spotted him and brought his jeep under heavy fire. Undeterred, CQMH Abdul Hamid kept on firing and motivated his detachment to destroy seven Pakistan tanks before getting mortally wounded. For his conspicuous bravery, inspiring leadership and supreme sacrifice, he was awarded the Param Vir Chakra (Posthumous).'
    },

    'albert ekka':{
        'date':'04-dec-1971',
        'name':'Albert Ekka',
        'rank':'Lance Naik',
        'details': 'Lance Naik Albert Ekka was in the forward company of 14 GUARDS during the attack on the enemy defences in Gangasagar in the Indo-Pak War of 1971. On 04 December 1971, Lance Naik Ekka noticed an enemy Light Machine Gun inflicting heavy casualty on his company. With complete disregard to his personal safety, he charged the enemy bunker, bayoneted two enemy soldiers and silenced the LMG. Suddenly another Medium Machine Gun opened up from a building. Despite being grievously injured, he crawled forward and lobbed a grenade, killing one soldier. As the MMG continued firing, he displaying utmost bravery, entered the bunker and silenced the enemy, thereby ensuring success of the attack. For his conspicuous bravery, determination and gallantry of highest order, he was awarded the Param Vir Chakra (Posthumous).'
    },

    'nirmal jit singh sekhon':{
        'date': '14-dec-1971',
        'name': 'Nirmal Jit Singh Sekhon',
        'rank': 'Flying Officer',
        'details':'On 14 December 1971, Srinagar airfield was bombed and strafed by six Pakistani Sabre aircraft. Inspite of immense risk to life for attempting to take off during the air attack, Flying Officer Nirmal Jit Singh Sekhon of 18 Squadron, who was a Gnat pilot, took off and immediately engaged a pair of the attacking Sabres. He secured hits on one aircraft and damaged another. By this time four more Pak Sabre aircraft came to the rescue of their aircraft, which was locked in an air-combat with Indian Gnat. In the ensuing combat his aircraft was shot down by one of the Sabres. The sublime heroism, supreme gallantry and determination displayed by Flying Officer Sekhon in the face of certain death set new heights in Air Force traditions, for which he was awarded the Param Vir Chakra (Posthumous).'
    },

    'hoshiar singh':{
        'date': '15-dec-1971',
        'name': 'Hoshiar Singh',
        'rank': 'Major',
        'details': 'On 15 December 1971, during India-Pakistan War Major Hoshiar Singh was commanding a company of 3 GRENADIERS and was ordered to capture the enemy locality of Jarpal. During the assault, his company came under intense shelling. Undeterred, he led the charge and captured the objective after a fierce hand-to-hand fight. The enemy reacted and put in several counter attacks. Despite being wounded he moved from trench to trench motivating his soldiers to shoot every enemy in sight. At that time, an enemy shell landed near the Medium Machine Gun post, injuring the crew and rendering it inoperative. Major Hoshiar Singh, realizing its importance, rushed and manned the gun, inflicting heavy casualties on the enemy. The attack was successfully repulsed and the enemy retreated. For his dauntless leadership and indomitable fighting spirit, he was awarded the Param Vir Chakra.'
    },

    'arun khetarpal':{
        'date':'16-dec-1971',
        'name': 'Arun Khetarpal',
        'rank': 'second Lieutenant',
        'details': 'On 16 December 1971, Second Lieutenant Arun Khetarpal of \'A\' Squadron, POONA HORSE, voluntarily moved to reinforce \'B\' Squadron at Shakargarh sector, on receiving an urgent call for reinforcements. Enroute, his tanks came under heavy fire from enemy strong points and RCL gun nests. Destroying the enemy\'s opposition, he reached \'B\' Squadron position and engaged the enemy in a fierce battle. Ten enemy tanks were destroyed, of which Khetarpal personally destroyed four. He was badly injured and was ordered to pull back, which he declined. He shot down one more enemy tank, before a second enemy shell landed on his Centurion tank \'Famagusta\' and killed him. For displaying the most conspicuous bravery and for making the supreme sacrifice, Second Lieutenant Arun Khetarpal was awarded the Param Vir Chakra (Posthumous).'
    },

    'bana singh':{
        'date': '26 july 1987',
        'name': 'Bana Singh',
        'rank': 'Naib Subedar',
        'deatils': 'On 26 June 1987, Naib Subedar Bana Singh of 8 JAK LI volunteered for a task force to clear Quaid Post, held by Pak Army in the Siachen Glacier, at an altitude of 21,000 feet. Siachen\'s extreme climate with intense blizzards, temperature of nearly -50 degree C and shortage of oxygen were the biggest threat to survival. Troops of 8 JAK LI scaled a 457 meters high wall of ice from a treacherous approach in zero visibility conditions, reached the peak and destroyed the enemy bunker by lobbing grenades. Naib Subedar Bana and his team charged with their bayonets and killed some Pakistani soldiers while the remaining jumped off the cliff in fear. For displaying most conspicuous gallantry and leadership under most adverse conditions, Naib Subedar Bana Singh was awarded the Param Vir Chakra.'
    },

    'ramaswamy parameswaran':{
        'date': '25-nov-1987',
        'name': 'Ramaswamy Parameswaran',
        'rank': 'Major',
        'details':'On 25 November 1987, when Major Ramaswamy Parameswaran of 8 MAHAR was returning from a search operation in Sri Lanka, his column was ambushed by a group of militants. With cool presence of mind, he encircled the militants from the rear and attacked them, taking them completely by surprise. During the hand-to-hand combat, a militant shot him in the chest. Undaunted, Major Parameswaran snatched back the rifle from the militant and shot him dead. Gravely wounded, he continued to give orders and inspired his command till he breathed his last. His courageous actions resulted in five militants getting killed and numerous weapons and ammunition being recovered. Major Ramaswamy Parameswaran displayed conspicuous gallantry and inspiring leadership and made the supreme sacrifice, for which he was awarded the Param Vir Chakra (Posthumous).'
    },

    'manoj kumar pandey':{
        'date': '03-july-1999',
        'name': 'Manoj Kumar Pandey',
        'rank': 'Lieutenant',
        'details': 'During Operation Vijay, Lieutenant Manoj Kumar Pandey of 1/11 GORKHA RIFLES was tasked to clear Khalubar Ridge in Batalik, Jammu & Kashmir. On 03 July 1999 as his company was advancing, it came under heavy enemy fire. He fearlessly assaulted the enemy, killing four enemy troops and destroying two bunkers. Although wounded in the shoulder and leg, he closed in on the first bunker and in a ferocious hand-to-hand combat, killed two more and cleared the bunker. He continued to lead his men clearing bunker after bunker, until he got a fatal burst on his forehead. Inspired by his raw courage, his troops kept charging at the enemy and ultimately captured the post. For exhibiting an act of most conspicuous gallantry and supreme sacrifice, he was awarded the Param Vir Chakra (Posthumous).'
    },

    'yogender singh yadav':{
        'date': '03-july-1999',
        'name': 'Yogender Singh Yadav',
        'rank': 'Grenadier',
        'details': 'During Operation Vijay, Grenadier Yogender Singh Yadav of 18 GRENADIERS was part of the Ghatak Platoon tasked to capture Tiger Hill Top in Drass, Jammu & Kashmir. On 03 July 1999, under heavy enemy fire, he and his team scaled a snowbound vertical cliff face and silenced the bunker to allow the rest of Platoon to scale the cliff. Inspite of having been hit by three bullets in his groin and shoulder, displaying superhuman strength, he charged on to the second bunker and neutralised it, killing three Pakistani soldiers. Inspired by his gallant act, the platoon charged onto the other positions with renewed courage and captured Tiger Hill Top. For exhibiting an act of indomitable courage and gallantry of the highest order, he was awarded the Param Vir Chakra.'
    },

    'sanjay kumar':{
        'date':'4-july-1999',
        'name': 'Sanjay Kumar',
        'rank': 'Rifleman',
        'details': 'During Operation Vijay, Rifleman Sanjay Kumar was the leading Scout of a company of 13 JAK RIF for the capture of area Flat Top on 04 July 1999 in Mushkoh Valley, Jammu & Kashmir. Having scaled the cliff, he came under effective enemy fire from a bunker. In the ensuing hand-to-hand combat, he killed three of the intruders and was himself seriously injured. Taken totally by surprise, the enemy left behind a Universal Machine Gun and started running. Rifleman Sanjay Kumar picked up the UMG and killed the fleeing enemy. The brave action on his part motivated his comrades to charge on to the enemy and capture area Flat Top. For exhibiting an act of indomitable courage and gallantry of the highest order, he was awarded the Param Vir Chakra.'
    },

    'vikram batra':{
        'date': '07-july-1999',
        'name': 'Vikram Batra',
        'rank': 'Captain',
        'details': 'During Operation Vijay, Captain Vikram Batra of 13 JAK RIF, was tasked to capture Point 5140. Leading from the front, in a daring assault, he killed four enemy troops in close combat battle. On 07 July 1999, his company was tasked to capture a feature on Point 4875. In a fierce hand-to-hand fight, he killed five enemy soldiers. Despite sustaining grave injuries, he led his men from the front and pressed on the attack, achieving virtually impossible task in the face of heavy enemy fire, before attaining martyrdom. Inspired by his courageous act, his troops annihilated the enemy and captured Point 4875. For exhibiting an act of conspicuous gallantry, inspiring leadership, indomitable courage and supreme sacrifice, he was awarded the Param Vir Chakra (Posthumous).'
    },

    'not a PVC awardee':{
        'date': null,
        'name': null,
        'rank': null,
        'details': null
    }
};




app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html') 
    //__dirname is used when you want to tell the server that look for the file from this particular directory where server.js file is located.

    //this above code will serve up html file on start of the page
});

app.get('/api',(request, response)=>{
    response.json(object);
});

// app.get('/api/listNameOfPVC',(request, response)=>{
//     for(let i=0; i<10; i++){
//         console.log(object[i]);
//         response.json(object[i].name);

//     }
// });


app.get('/api/:name',(request, response)=>{
    const param = request.params.name.toLowerCase();
    if(object[param]){
        response.json(object[param]);
    } else{
        response.json(object['not a PVC awardee'])
    }
});

app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
});