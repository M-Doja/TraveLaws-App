(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	function HomeFactory($http, $q) {
		var o = {};
		o.States = [
		{state: 'ALABAMA', image: '/img/alabama.png', laws: {gen : 'http://www.alabama.gov/',traf : 'http://www.dmv.org/al-alabama/safety-laws.php',gun : 'http://www.ago.state.al.us/Page-Alabama-Weapon-Law',bus : 'http://www.alabama.gov/category/business'}, facts:{stPop : "4,849,377", stBird : "Yellowhammer", stFlower : "Camelia", stCaptiol : "Montgomery", stMotto : "Audemus jura nostra defendere (We dare defend our rights)", stMascot : "eastern tiger swallowtail ", stNickName : "Yellowhammer State", stArea : "50,744 sq mi.", stUnion : "Dec. 14, 1819" }},

		{state: 'ALASKA', image: '/img/alaska.gif', laws: {gen : 'http://alaska.gov/',traf : 'http://www.dmv.org/ak-alaska/automotive-law/vehicle-code.php',gun : 'http://dps.alaska.gov/statewide/permitslicensing/concealedhandguns.aspx',bus : 'http://alaska.gov/businesshome.html'}, facts:{stPop : "", stBird : "", stFlower : "", stCaptiol : "", stMotto : "", stMascot : "", stNickName : "", stArea : "", stUnion : "" }},

		{state: 'ARIZONA', image: '/img/arizona.png', laws: {gen : 'https://az.gov/',traf : 'http://www.dmv.org/az-arizona/automotive-law/vehicle-code.php',gun : 'http://www.azdps.gov/services/concealed_weapons/',bus : 'https://az.gov/work/business'}, facts:{stPop :"" , stBird : "", stFlower : "", stCaptiol : "", stMotto : "", stMascot : "", stNickName : "", stArea : "", stUnion : "" }},

		{state: 'ARKANSAS', image: '/img/arkansas.png', laws: {gen : 'http://www.arkansas.gov/',traf : 'http://www.ghsa.org/html/stateinfo/bystate/ar.html',gun : 'http://asp.arkansas.gov/services-and-programs/detail/concealed-handgun-licensing',bus : 'http://www.arkansas.gov/business/'}, facts:{stPop :"" , stBird : "", stFlower : "", stCaptiol : "", stMotto : "", stMascot : "", stNickName : "", stArea : "", stUnion : "" }},

		{state: 'CALIFORNIA', image:'/img/california.gif', laws: {gen : 'http://www.ca.gov',traf : 'https://www.dmv.ca.gov/portal/dmv',gun : 'https://oag.ca.gov/firearms',bus : 'http://business.ca.gov/'}, facts:{stPop : "", stBird : "", stFlower : "", stCaptiol : "", stMotto : "", stMascot : "", stNickName : "", stArea : "", stUnion : "" }},

		{state: 'COLORADO', image:'/img/colorado.png',laws: {gen: 'https://www.colorado.gov/', traf: 'http://www.ghsa.org/html/stateinfo/bystate/co.html', gun: 'https://www.colorado.gov/pacific/csp/colorado-gun-laws', bus: 'https://www.colorado.gov/business-resources'}, facts:{stPop :"" , stBird : "", stFlower : "", stCaptiol : "", stMotto : "", stMascot : "", stNickName : "", stArea : "", stUnion : "" }},

		{state: 'CONNECTICUT', image: '/img/conneticut.png', laws: {gen: 'http://portal.ct.gov/', traf: 'http://portal.ct.gov/driving/?TaxId=249', gun: 'http://www.ct.gov/despp/cwp/view.asp?a=4213&q=494614', bus: 'http://portal.ct.gov/business/?TaxId=118'}, facts:{stPop : "", stBird : "", stFlower : "", stCaptiol : "", stMotto : "", stMascot : "", stNickName : "", stArea : "", stUnion : "" }}
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
