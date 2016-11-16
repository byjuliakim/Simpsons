$(function() { 
	$('#main').hide();
	$('#questions').hide();
	$('#answers').hide();

	$('#takeQuiz').on('click', function() {
			$('#header').fadeOut();
			$('#main').fadeIn();
			$('#questions').fadeIn();
		});

	$('#reset').on('click', function() {
		$('#answers').fadeOut();
		$('#main').fadeOut();
		$('#header').fadeIn();
	});

	//reset the selected radio buttons
	$("#reset").on('click', function(){
        $("input[type=radio]").attr("checked", false);
    });

	character = [
		{
			name: 'Lenny Leonard',
			type: '',
			personality:'',
			hobby: 'beer',
			place: 'moes',
			image: 'asset/lenny.jpg',
			description: 'Years of drinking has made you somewhat dimwitted. However, you remain very loyal to your best friends.',
			quote: "Ow, my eye! I'm not supposed to get pudding in it!"
		},
		{
			name: 'Carl Carlson',
			type: '',
			personality:'',
			hobby: 'beer',
			place: 'moes',
			image: 'asset/carl.jpg',
			description: 'You are definitely the cooler and smarter one out of your group of best buds. But sometimes you can come off a jerk. Drinking stoops you down to their level.',
			quote: "See, this is why I don't talk much."
		},
		{
			name: 'Moe Szyslak',
			type: '',
			personality:'',
			hobby: 'beer',
			place: 'moes',
			image: 'asset/moe.jpg',
			description: "You are a depressed loner and anger easily. You use alcohol as a crutch. But a few close friends see the good in you.",
			quote: "I'm better than dirt! Well, most kinds of dirt. I mean, not that fancy store bought dirt loaded with nutrients, I can't compete with that."
		},
		{
			name: 'Homer Simpson',
			type: '',
			personality: 'lazy',
			hobby: 'food',
			place: '',
			image: 'asset/homer.jpg',
			description: "You have a big heart. Although your appetite is even bigger. When you are not out drinking with your pals, you are eating chips on the couch.",
			quote: "Mmm...64 slices of American cheese..."
		},
		{
			name: 'Bart Simpson',
			type: '',
			personality:'joker',
			hobby: 'tv',
			place: 'outdoors',
			image: 'asset/bart.jpg',
			description: "You are a lovable little scamp that likes to joke around and get into all kinds of trouble.",
			quote: "I didn't do it."
		},
		{
			name: 'Ned Flanders',
			type: '',
			personality:'nice',
			hobby: 'music',
			place: 'church',
			image: 'asset/ned.jpg',
			description: "You are the kindest person ever. Although you are kinda predictable. But you're also in great shape!",
			quote: "Feels like I'm wearing nothing at all!"
		},
		{
			name: 'Maggie Simpson',
			type: '',
			personality: '',
			hobby: 'tv',
			place: 'home',
			image: 'asset/maggie.jpg',
			description: "Actions speak louder than words. You like to take in you're surroundings and live in the moment.",
			quote: '😊'
		},
		{
			name: 'Apu Nahasapeemapetilon',
			type: '',
			personality: '',
			hobby: '',
			place: 'mart',
			image: 'asset/apu.jpg',
			description: "You take your job too seriously, and sometimes it affects your health. But it does make you stronger.",
			quote: "Thank you, come again!"
		},
		{
			name: 'Mr. Burns',
			type: '',
			personality: 'evil',
			hobby: '',
			place: '',
			image: 'asset/burns.jpg',
			description: "You're flat out twisted and nobody likes you. Change your life style ASAP.",
			quote: "Are you saying boo or boo-urns?"
		},
		{
			name: 'Comic Book Guy',
			type: '',
			personality: 'lazy',
			hobby: 'food',
			place: '',
			image: 'asset/comicbookguy.jpg',
			description: "You're an angry loner. Only food can calm you down.",
			quote: "Worst. Game. Ever."
		},
		{
			name: 'Barney Gumble',
			type: '',
			personality: 'lazy',
			hobby: 'beer',
			place: '',
			image: 'asset/barney.jpg',
			description: "You have a serious drinking problem and need intervention. In fact, you're probably drunk right now.",
			quote: "JUST HOOK IT TO MY VEINS!"
		},
		{
			name: 'Bleeding Gums Murphy',
			type: '',
			personality: 'lazy',
			hobby: 'music',
			place: '',
			image: 'asset/murphy.jpg',
			description: "For some reason you enjoy listening to sad music about relationships. But too lazy to start one.",
			quote: "The Blues ain't about feeling better; it's about making other people feel worse."
		},
		{
			name: 'Nelson Muntz',
			type: '',
			personality: 'lazy',
			hobby: 'tv',
			place: '',
			image: 'asset/nelson.jpg',
			description: "You laugh at other people's misfortunes. But really, you're life sucks too.",
			quote: "Haw haw!"
		},
		{
			name: 'Ralph Wiggum',
			type: '',
			personality: 'joker',
			hobby: 'food',
			place: '',
			image: 'asset/ralph.jpg',
			description: "You are the sweetest person of all time. You balance that out by being super clumsy.",
			quote: "I flushed a potato down the toilet. Now we have to live in a hotel!"
		},
		{
			name: 'Bumblebee Guy',
			type: '',
			personality: 'joker',
			hobby: 'beer',
			place: '',
			image: 'asset/bumblebee.jpg',
			description: "You're a guy dressed as a bumblebee. Maybe think about a career change.",
			quote: "Ay, ay, ay! No es bueno!"
		},
		{
			name: 'Otto',
			type: '',
			personality: 'joker',
			hobby: 'music',
			place: '',
			image: 'asset/otto.jpg',
			description: "You have dreams of becoming a rockstar. So you do excessive drugs to induce these dreams.",
			quote: "They call them fingers, but I never see them fing."
		},
		{
			name: 'Krusty the Clown',
			type: '',
			personality: 'joker',
			hobby: 'tv',
			place: 'none',
			image: 'asset/krusty.jpg',
			description: "You were popular, funny, and great with kids. Fame has gotten to you, so now you have an addiction problem.",
			quote: "I work like I drink...alone, and with a monkey watching me."
		},
		{
			name: 'Dr. Hibbert',
			type: '',
			personality: 'smart',
			hobby: 'food',
			place: '',
			image: 'asset/drhibbert.jpg',
			description: "You're one of the smartest people in the city and actually make a difference in people's lives. You have good sense of humour as well.",
			quote: "Another broccoli related death...one of the deadliest plants on earth. It tries to warn you itself with its terrible taste."
		},
		{
			name: 'Principal Skinner',
			type: '',
			personality: 'smart',
			hobby: 'beer',
			place: '',
			image: 'asset/skinner.jpg',
			description: "You're a mama's boy. But you're book smart and actually apply school knowledge in the real world. So, there's that going for you.",
			quote: "Am I out of touch? No, it's the children who are wrong."
		},
		{
			name: 'Lisa Simpson',
			type: '',
			personality: 'smart',
			hobby: 'music',
			place: '',
			image: 'asset/lisa.jpg',
			description: "You're future is bright and you're the smartest one out of all your friends. Except you don't have any. But hey, at least you're smart!",
			quote: "Books...these are my only friends."
		},
		{
			name: 'Kent Brockman',
			type: '',
			personality: 'smart',
			hobby: 'tv',
			place: '',
			image: 'asset/kent.jpg',
			description: "You're that one friend that keeps up with current events. You rarely sugar coat things. Except when food is involved.",
			quote: "Joblessness is no longer just for philosophy majors. Useful people are feeling the pinch!"
		},
		{
			name: 'Snake Jailbird',
			type: '',
			personality: 'evil',
			hobby: 'beer',
			place: '',
			image: 'asset/snake.jpg',
			description: "You disregard the law like nobody's business. It's totally badass!",
			quote: "Um, I must have, like, fallen on a bullet, and it like, drove itself into my gut."
		},
		{
			name: 'Marge Simpson',
			type: '',
			personality: 'nice',
			hobby: 'food',
			place: '',
			image: 'asset/marge.jpg',
			description: "You're pretty much everybody's 2nd mom. You nag a lot. But you enjoy making food for people, so it's okay.",
			quote: "I don't mind if you pee in the shower, but only if you're taking a shower."
		},
		{
			name: 'Duff Man',
			type: '',
			personality: 'nice',
			hobby: 'beer',
			place: '',
			image: 'asset/duffman.jpg',
			description: "You're the life of the party, a happy drunk. You're go-to dance move is the hip thrust.",
			quote: "Duff Man is thrusting in the direction of the problem! Oh, yeah!"
		},
		{
			name: 'Disco Stu',
			type: '',
			personality: 'nice',
			hobby: 'music',
			place: '',
			image: 'asset/discostu.jpg',
			description: "You love music and generally have a positive upbeat attitude. You refer to yourself in the 3rd person, always.",
			quote: "Disco Stu, was talkin' to YOU!"
		},
		{
			name: 'Milhouse Van Houten',
			type: '',
			personality: 'nice',
			hobby: 'tv',
			place: '',
			image: 'asset/milhouse.jpg',
			description: "You're an overall nice person. You're also kind of a nerd. Minus the brains.",
			quote: "But my mom says I'm cool!"
		}
		// {
		// 	name: 'Random?',
		// 	image: ''
		// }
	];
	

	
	//Allow user to select some selections
	//And when they submit the form
	$('#submit').on('click', function(e){
		e.preventDefault();
		//store the value of what the person selects in the options
		var typeChoice = $('.question1 input[name=type]:checked').val();
		var personalityChoice =  $('.question2 input[name=personality]:checked').val();
		var hobbyChoice =  $('.question3 input[name=hobby]:checked').val();
		var placeChoice =  $('.question4 input[name=place]:checked').val();		
		
		//validate that items are checked
		//
		if (typeChoice === undefined || personalityChoice == undefined || hobbyChoice == undefined || placeChoice == undefined) {
			alert('Please answer all the questions!');
			return false;
		} else {
			$('#questions').hide();
			$('#answers').fadeIn();	
		}
		
		//create random index for when there is more than one character		
		var randomIndex = Math.floor(Math.random() * 3);

		for(i = 0; i < character.length; i++){
			if ((hobbyChoice === 'food' || hobbyChoice === 'beer') && personalityChoice === 'lazy' && (placeChoice === 'moes' || placeChoice === 'home')) {
				$('.simpsonName').html(character[3].name);
				$('#simpsonImage').attr('src', character[3].image);
				$('.simpsonBio').text(character[3].description);
				$('.simpsonQuote').text(character[3].quote);
			} 
			else if (personalityChoice === 'joker' && hobbyChoice === 'tv' && placeChoice === 'outdoors') {
				$('.simpsonName').html(character[4].name);
				$('#simpsonImage').attr('src', character[4].image);
				$('.simpsonBio').text(character[4].description);
				$('.simpsonQuote').text(character[4].quote);
			}
			else if (personalityChoice === 'nice' && hobbyChoice === 'music' && placeChoice === 'church') {
				$('.simpsonName').html(character[5].name);
				$('#simpsonImage').attr('src', character[5].image);
				$('.simpsonBio').text(character[5].description);
				$('.simpsonQuote').text(character[5].quote);
			} 
			else if (hobbyChoice === 'tv' && placeChoice === 'home'){
				$('.simpsonName').html(character[6].name);
				$('#simpsonImage').attr('src', character[6].image);
				$('.simpsonBio').text(character[6].description);
				$('.simpsonQuote').text(character[6].quote);
			} 
			else if (placeChoice === 'mart') {
				$('.simpsonName').html(character[7].name);
				$('#simpsonImage').attr('src', character[7].image);
				$('.simpsonBio').text(character[7].description);
				$('.simpsonQuote').text(character[7].quote);
			} 
			else if (personalityChoice === 'evil' && (hobbyChoice === 'food' || hobbyChoice === 'music' || hobbyChoice === 'tv')){
				$('.simpsonName').html(character[8].name);
				$('#simpsonImage').attr('src', character[8].image);
				$('.simpsonBio').text(character[8].description);
				$('.simpsonQuote').text(character[8].quote);
			}
			else if (hobbyChoice === 'beer' && placeChoice === 'moes') {
				$('.simpsonName').html(character[randomIndex].name);
				$('#simpsonImage').attr('src', character[randomIndex].image);
				$('.simpsonBio').text(character[randomIndex].description);
				$('.simpsonQuote').text(character[randomIndex].quote);
			} 
			else if (personalityChoice === character[i].personality && hobbyChoice === character[i].hobby) {
				$('.simpsonName').html(character[i].name);
				$('#simpsonImage').attr('src', character[i].image);
				$('.simpsonBio').text(character[i].description);
				$('.simpsonQuote').text(character[i].quote);
			} 
		};

	});
	
});

//twitter
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));