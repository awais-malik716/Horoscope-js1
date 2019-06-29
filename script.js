function showFortune(){

    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let month = document.getElementById('month').value;
    let zodiacSign = document.getElementById('zodiac-sign');
    let fortune = document.getElementById('para');
    

    //var audio = new Audio('horror-music.mp3');
    //audio.play();

    if ((month == 1 && date >= 21 || month == 2 && date <= 19)){
        zodiacSign.innerHTML = (name + " YOU ARE AQUARIUS");
        fortune.innerHTML = ("Before your weekend gets away from you, enjoy a slow-moving, restful Saturday morning as the moon lounges in your fourth house of domesticity and family. Brew up a pot of chai and call your favorite relative or an old friend you haven’t phone-chatted with in forever. Later in the day, la luna will dart into decadent Gemini and your celebratory fifth house for the rest of the weekend. Dress up, rally your wingpeople and hit the social circuit. Single Water Bearers will be in especially flirty spirits, so work the room! It’s an equally sanguine time for couples, who may prefer to skip the crowds and canoodle in passionate privacy. You can reconnect with your crew on Sunday, when the moon gets a jolt from adventurous Jupiter. There’s no telling what you might get up to, so be prepared for any and all contingencies.")
    } else if((month == 2 && date >= 20 || month == 3 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE PISCES");
        fortune.innerHTML = ("Early Saturday, the more is the merrier as the moon hovers in cozy Taurus and your communal third house. Invite a couple new acquaintances to join you and your true-blue crew on the day’s outings. They might have a few fun ideas to throw into the mix! Later, you can peel off with one or two people to engage in a less popular activity, like a serious documentary or lecture. Later Saturday, la luna shifts into Gemini and your domestic quarters. You might be in the mood for a small, intimate group and doing nothing more than ordering in and watching a flick. If you’re up for entertainment, pull the games out of the closet and draw up teams, or pass out the prep tools and whip up a giant feast together. On Sunday, the moon faces off with audacious Jupiter, possibly giving you a wild hare to do some radical redecorating. Mixing things up will get stagnant energy flowing, but since this is a short-term transit, sleep on it before you knock down any walls.")
    } else if((month == 3 && date >= 21) || (month == 4 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE ARIES");
        fortune.innerHTML = ("Weekend festivities may have to wait until Saturday night as the moon in steadfast Taurus tears through your second house of practical matters early this weekend. You’ll be in industrious spirits, so take advantage of this energy surge by ticking multiple items off your to-do list. You might want to invite a friend along on the Home Depot or IKEA run to make it more fun. Hit the farmer’s market and load up on wholesome goodies to get you through the week. Later in the day, when la luna beams into garrulous Gemini and your communication corner for the rest of the weekend, your mantra may be “the more the merrier.” Is Chateau Ram dinner-party-ready? If so, send out an SOS for everyone to bring a dish or a bottle and get ready to feast. On Sunday, the moon sings a dynamic duet with expansive Jupiter, and you might hit it off with someone you never felt particularly close to before. Time will tell if this sudden BFF—or possible romantic interest—can go the distance. Try to enjoy the moment under this fleeting cosmic influence.")
    } else if((month == 4 && date >= 21) || (month == 5 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE TAURUS");
        fortune.innerHTML = ("Saturday's self-aware Taurus moon serves up an important PSA: Don’t ask for people’s opinions when you neither want nor need them! You may have recently put out a “RFP” on a certain issue you’re mulling. But now the deluge of divergent ideas is leaving you more confused than ever. Thank everyone for their feedback, take a few of the best notions, and then retreat into your Bullpen to mull. And next time you’re tempted to put out an SOS, remember this episode. On Saturday night, la luna moves into Gemini and your grounded second house, turning your attention to financial or security matters. Have you left a bill unpaid? Is there a situation you need to address with a roommate, partner or family member? Are you so over paying THAT person’s drink tab again? On Sunday, the moon faces off with broad-thinking Jupiter, which could inspire a creative way to handle this.");
    } else if((month == 5 && date >= 21) || (month == 6 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE GEMINI");
        fortune.innerHTML = ("Before you rush into weekend-warrior mode to tackle that to-do list, pause for a cause! Even if your fridge and pantry are on empty and there’s nothing clean to wear, brew some coffee or tea, cue up a chill playlist and slowly ease into the day. The moon is lingering in your restful twelfth house, urging you to follow its lead and operate in the slowest-mo you can muster. Don’t you have some reading or viewing to catch up on? You’ll have plenty of stored kinetic energy to burn on Saturday night once la luna dives into Gemini for the rest of the weekend. On Sunday, you may feel like you’re suffocating in a certain friendship or romantic relationship as the moon faces off with indie-spirited Jupiter. Grant yourself permission to loosen the leash and wander to own heart’s content!");
    } else if((month == 6 && date >= 21) || (month == 7 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE CANCER");
        fortune.innerHTML = ("You’ll be in your social-butterfly element on Saturday, when the spirited Taurus moon careens through your eleventh house of group activity. Who’s up for late-morning power yoga followed by brunch and a hike then capped off with happy hour at the local? (Cancer raises hand.) Or perhaps your weekend jam will feature some vintage-clothes shopping or a long walk on the beach (however bundled-up you need to be). Just don’t lock in a rigid PM itinerary since la luna will shift gears and land in Gemini and your twelfth house of relaxation, imagination and escape. If you MUST make plans, keep them loose. Sunday’s vibes follow suit, and you’ll be happiest with an open schedule and a full tank of gas!")
    } else if((month == 7 && date >= 21) || (month == 8 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE LEO");
        fortune.innerHTML = ("You might want to hit pause on getting your weekend started, Leo, but it’ll be worth the sacrifice. With the tuned-in moon lingering in your career corner, inspiration could strike on a project that didn’t get wrapped up last week. Or maybe you’ll finally work on YOUR burgeoning brand! Take time to attend to all those little supporting details that you never get around to during your busy workweek, like updating your Instagram and Facebook feeds and blog. When you get to a good quitting point, gift yourself a little indulgence, like a meal out with friends or a mini shopping spree. Later in the day and through Sunday, la luna will be marching through Gemini and your eleventh house of social activity, where it will get in a dynamic dust-up with wild Jupiter. Have fun for fun’s sake, and if a certain individual makes clear moves on you, enjoy the heat from those sparks!")
    } else if((month == 8 && date >= 21) || (month == 9 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE VIRGO");
        fortune.innerHTML = ("Try not to wander too far off the grid on Saturday, Virgo—though that might prove a mission impossible. With the itinerant moon firing up your ninth house of global adventures, there’s no telling where you might go! If you had time and funds, you’d be looking at flights and tooling off to Thailand or Tbilisi. If you have to sate your wanderlust with a local music festival or cultural fair a couple towns away, there’s nothing wrong with that. Keep your eyes open for intriguing new faces, especially if you’re single. Seductive, soulful vibes are in the air! Later in the day, la luna revs into Gemini and your tenth house of authority and influence. Who can you call to snag tickets to a sold-out show or a table at that hot new chef-driven resto? On Sunday, as the moon gets a jolt from enterprising Jupiter, you could have an epiphany about your professional path and find yourself considering something VERY different!")
    } else if((month == 9 && date >= 21) || (month == 10 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE LIBRA");
        fortune.innerHTML = ("Saturday dawns with the emo moon hovering in your eighth house of intense emotions, seduction and transformation. If you don’t wake up alone, this is a magnificent morning for some deep soul merging, whether on a physical or spiritual level—or how about both? On your own, you might do some mystical or metaphysical reading, or perhaps pull a few angel cards for insight. Later in the day, la luna zips into Gemini and your exploratory ninth house for the rest of the weekend. You’ll be back in sunny spirits and raring to play. What could you do to sate your hunger for something adventurous? Could you pull off a last-minute overnight getaway with a pal or paramour? Don’t overthink it—just go. On Sunday, when the moon gets tempted by travel-obsessed Jupiter, you might turn that road trip into a veritable magical mystery tour, notifying a client or the powers that be at work that you’ll see ‘em on Tuesday.")
    } else if((month == 10 && date >= 21) || (month == 11 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE SCORPIO");
        fortune.innerHTML = ("With the moon in your seventh house of partnership early Saturday, you may be feeling especially close to your S.O. or, if you’re single, eager to meet someone new. While you’ll have a lot of offers, spare some one-on-one time for your most important people instead of multitasking or cramming everyone around a giant brunch table. Later in the day, when the moon grooves into Gemini and your eighth house of soul merging, your mood could shift to a more private or intense setting. Clear out your schedule and plan an intimate night in—or at least away from the crowds. On Sunday, la luna locks horns with reactive Jupiter, which could trigger some strong (over)reactions. Before you hurl any accusations or open the teary waterworks, get the facts. That thing getting you so heated may be nothing at all!")
    } else if((month == 11 && date >= 21) || (month == 12 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE SAGITTARUIS");
        fortune.innerHTML = ("Ride the morning’s willpower wave! A self-motivated Taurus moon powers up your sixth house of wellness and self-care for most of Saturday. You don’t have to reinvent the wheel—or lunge into weekend-warrior mode—to do a few things that you KNOW will make your body, mind (and soul) feel good all over. Can you drop into a Pilates or Spin class—and then reward yourself with an organic vegan lunch with friends? Get your workout in early since later in the day, la luna will head into Gemini and your partnership house for the rest of the weekend. A close person may tempt you with a too-fun-to-turn-down invite (and really, why SHOULD you resist?). Bear in mind that you can have a great time without undoing any of your personal health commitments. The rest of the weekend’s romantic forecast could bring some adventurous plot twists, as your ruler, wild child Jupiter, makes a dynamic opposition to la luna. Push the envelope in the direction you want, whether that means being the seducer or inviting your partner to get a little friskier.")
    } else if((month == 12 && date >= 21) || (month == 1 && date <= 20)){
        zodiacSign.innerHTML = (name + " YOU ARE CAPRICORN");
        fortune.innerHTML = ("If you’re hoping for a quiet start to the weekend, adjust your expectations, Capricorn. With the Taurus moon churning up excitement, flirtatious vibes—and theatrics—in your passionate fifth house, things will be anything but dull. But don’t confuse being the life of the party with being a drama queen. Everyone’s going through something, so don’t hog the mic with outtakes from your personal life. Should someone say or do something that isn’t exactly to your liking, rather than turn it into a Hollywood epic, take them aside and privately settle it. And then: back to weekend festivities! Later on Saturday, when la luna shifts into cerebral Gemini, cooler heads will prevail. Center yourself with an evening yoga class and organize a chill night at someone’s home. On Sunday, take care of chores, admin tasks and, if there’s time left over, see if you can schedule a last-minute, much-deserved massage.")
    }


    //CONDITIONS FOR MONTHS AND DATE LIMIT

}
