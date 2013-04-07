function PersonRepo(){
	this.list = [
		//TODO: hack, all have to be the same year
		new Person("aug", "31st", new Date(1985, 7, 31)),
		new Person("March(25th)", "Test", new Date(1985, 2, 25)),
		new Person("jan", "1st", new Date(1985, 0, 1)),
		new Person("Amy", "Dizzy", new Date(1985, 6, 26)),
		new Person("Amy2", "Dizzy2", new Date(1985, 6, 26)),
		new Person("dec", "30th", new Date(1985, 11, 30))
	];

	function Person (firstName, lastName, birthday, imgUrl){
		if (typeof(imgUrl)==='undefined') {
			imgUrl = 'http://lorempixel.com/300/300/';
		};

		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = birthday;
		this.imgUrl = imgUrl;
	};
}

function BirthdayCalculator(){
	//set this date to the same as a birthday to test
	var now = new Date();
	var today = new Date();
	today.setHours(0,0,0,0);

	this.getNextFromNow = function(){
		return this.getNextFromDate(now);
	}

	this.getNextFromDate = function(date){
		//TODO get this year from date
		var thisYear = 2013;
		var people = new PersonRepo().list;
		var sorted = sortByBirthdayAscending(people);

		var dateOfNextBirthday = getDateOfNextBirthday();

		date.setFullYear(thisYear);

		for (var i = 0; i < sorted.length; i++) {
			var birthday = sorted[i].birthday;
			var lastInList = sorted[sorted.length - 1].birthday;
			lastInList.setFullYear(thisYear);
			birthday.setFullYear(thisYear);

			if (lastInList < date) {
				dateOfNextBirthday = sorted[0].birthday;
				//dateOfNextBirthday.birthday.setFullYear(thisYear + 1);
				break;
			}
			else {
				if (birthday >= date) {
					dateOfNextBirthday = sorted[i].birthday;
					break;
				};
			};
		};

		return nextBday;
	};

	function sortByBirthdayAscending(people){
		return people.sort(function(a,b){return a.birthday - b.birthday})
	}

	function thereIsaBirthdayToday(d1){
              var d2 = now;
                return d1.getUTCMonth() == d2.getUTCMonth() 
                && d1.getUTCDate() == d2.getUTCDate();
    };

    this.thereIsaBirthdayToday = function(){
    	var nextBDayPerson = this.getNextFromNow();
    	return thereIsaBirthdayToday(nextBDayPerson.birthday);
    };
};

