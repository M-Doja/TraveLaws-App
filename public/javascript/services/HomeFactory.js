(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	function HomeFactory($http, $q) {
		var o = {};
		o.States = [
		{state: 'ALABAMA', image: '/img/alabamaNew.png', laws: {gen : 'http://www.alabama.gov/',traf : 'http://www.dmv.org/al-alabama/safety-laws.php',gun : 'http://www.ago.state.al.us/Page-Alabama-Weapon-Law',bus : 'http://www.alabama.gov/category/business'}, facts:{stPop : "4,858,979 (2015 est.)", stBird : "Yellowhammer", stFlower : "Camelia", stCaptiol : "Montgomery", stMotto : "Audemus jura nostra defendere (We dare defend our rights)", stMascot : "eastern tiger swallowtail ", stNickName : "Yellowhammer State", stArea : "52,419 sq mi.", stUnion : "Dec. 14, 1819 (20)" }},

		{state: 'ALASKA', image: '/img/alaska.gif', laws: {gen : 'http://alaska.gov/',traf : 'http://www.dmv.org/ak-alaska/automotive-law/vehicle-code.php',gun : 'http://dps.alaska.gov/statewide/permitslicensing/concealedhandguns.aspx',bus : 'http://alaska.gov/businesshome.html'}, facts:{stPop : "738,432 (2015 est)", stBird : "willow ptarmigan (1955)", stFlower : "forget-me-not (1949)", stCaptiol : "Juneau", stMotto : "North to the Future", stMascot : "Moose", stNickName : "The Last Frontier", stArea : "663,268 sq mi.", stUnion : "Jan. 3, 1959 (49)" }},

		{state: 'ARIZONA', image: '/img/arizona.png', laws: {gen : 'https://az.gov/',traf : 'http://www.dmv.org/az-arizona/automotive-law/vehicle-code.php',gun : 'http://www.azdps.gov/services/concealed_weapons/',bus : 'https://az.gov/work/business'}, facts:{stPop :"6,828,065 (2015 est)" , stBird : "cactus wren (1931)", stFlower : "flower of saguaro cactus (1931)", stCaptiol : "Phoenix", stMotto : "Ditat Deus (God enriches)", stMascot : "Ringtail", stNickName : "Grand Canyon State", stArea : "113,990 sq mi.", stUnion : "Feb. 14, 1912 (48)" }},

		{state: 'ARKANSAS', image: '/img/arkansas.png', laws: {gen : 'http://www.arkansas.gov/',traf : 'http://www.ghsa.org/html/stateinfo/bystate/ar.html',gun : 'http://asp.arkansas.gov/services-and-programs/detail/concealed-handgun-licensing',bus : 'http://www.arkansas.gov/business/'}, facts:{stPop :"2,978,204 (2015 est)" , stBird : "mockingbird (1929)", stFlower : "apple blossom (1901)", stCaptiol : "Little Rock", stMotto : "Regnat populus (The people rule)", stMascot : "White-tailed Deer", stNickName : "The Natural State", stArea : "53,179 sq mi", stUnion : "June 15, 1836 (25)" }},

		{state: 'CALIFORNIA', image:'/img/california.gif', laws: {gen : 'http://www.ca.gov',traf : 'https://www.dmv.ca.gov/portal/dmv',gun : 'https://oag.ca.gov/firearms',bus : 'http://business.ca.gov/'}, facts:{stPop : "39,144,818 (2015 est)", stBird : "California valley quail (1931)", stFlower : "golden poppy (1903)", stCaptiol : "Sacramento", stMotto : "Eureka (I have found it)", stMascot : " California grizzly bear", stNickName : "Golden State", stArea : "163,696 sq mi", stUnion : "Sept. 9, 1850 (31)" }},

		{state: 'COLORADO', image:'/img/colorado.png',laws: {gen: 'https://www.colorado.gov/', traf: 'http://www.ghsa.org/html/stateinfo/bystate/co.html', gun: 'https://www.colorado.gov/pacific/csp/colorado-gun-laws', bus: 'https://www.colorado.gov/business-resources'}, facts:{stPop :"5,456,574 (2015 est)" , stBird : "lark bunting (1931)", stFlower : "Rocky Mountain columbine (1899)", stCaptiol : "Denver", stMotto : "Nil sine Numine (Nothing without Providence)", stMascot : "Rocky Mountain bighorn sheep", stNickName : "Centennial State", stArea : "104,094 sq mi", stUnion : "Aug. 1, 1876 (38)" }},

		{state: 'CONNECTICUT', image: '/img/conneticut.png', laws: {gen: 'http://portal.ct.gov/', traf: 'http://portal.ct.gov/driving/?TaxId=249', gun: 'http://www.ct.gov/despp/cwp/view.asp?a=4213&q=494614', bus: 'http://portal.ct.gov/business/?TaxId=118'}, facts:{stPop : "3,590,886 (2015 est)", stBird : "American robin (1943)", stFlower : "mountain laurel (1907)", stCaptiol : "Hartford", stMotto : "Qui transtulit sustinet (He who transplanted still sustains)", stMascot : "", stNickName : "Constitution State (official, 1959)", stArea : "5,543 sq mi", stUnion : "Jan. 9, 1788 (5)" }}
	];

		return o;
	}
})();

// {state: 'DELAWARE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'FLORIDA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'GEORGIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'HAWAII', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'IDAHO', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'ILLINOIS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'INDIANA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'IOWA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
  		// {state: 'KANSAS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'KENTUCKY', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'LOUISIANA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MAINE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MARYLAND', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MASSACHUSETTS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MICHIGAN', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
  		// {state: 'MINNESOTA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MISSISSIPPI', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MISSOURI', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MONTANA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEBRASKA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEVADA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEW HAMPSHIRE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			//  	{state: 'NEW JERSEY', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEW MEXICO', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEW YORK', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NORTH CAROLINA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NORTH DAKOTA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'OHIO', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'OKLAHOMA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
    	// {state: 'OREGON', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'PENNSYLVANIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'RHODE ISLAND', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'SOUTH CAROLINA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'SOUTH DAKOTA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'TENNESSEE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'TEXAS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'UTAH', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
      // {state: 'VERMONT', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'VIRGINIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WASHINGTON', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WEST_VIRGINIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WISCONSIN', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WYOMING', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}}
// ];
