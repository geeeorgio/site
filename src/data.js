import shortid from 'shortid';

const list = [
    { 
        id:shortid.generate(),
        author: 'Helen Keller',
        content: 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.'
    },    
    { 
        id:shortid.generate(),
        author: 'Confucius',
        content: 'It does not matter how slowly you go as long as you do not stop.',
    },
    {
    	id:shortid.generate(),
        author: 'Paulo Coelho',
        content: 'There is only one thing that makes a dream impossible to achieve: the fear of failure.',
    },
    {
    	id:shortid.generate(),
        author: 'Vince Lombardi',
        content: 'It’s not whether you get knocked down. It’s whether you get up.',
    },
    {   
    	id:shortid.generate(),
        author: 'Brian Tracy',
        content: 'Your true success in life begins only when you make the commitment to become excellent at what you do.',
    },
    { 
        id:shortid.generate(),
        author: 'Les Brown',
        content: 'Too many of us are not living our dreams because we are living our fears.',
    },    
    { 
        id:shortid.generate(),
        author: 'Francis of Assisi',
        content: 'Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible.',
    },
    {
    	id:shortid.generate(),
        author: 'Jim Rohn',
        content: 'Don’t wish it were easier. Wish you were better.',
    },
    {
    	id:shortid.generate(),
        author: 'Pele',
        content: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.',
    },
    {   
    	id:shortid.generate(),
        author: 'Ralph Waldo Emerson',
        content: 'The only person you are destined to become is the person you decide to be.',
    },
    { 
        id:shortid.generate(),
        author: 'Charles R. Swindoll',
        content: 'Life is 10% what happens to you and 90% how you react to it.',
    },    
    { 
        id:shortid.generate(),
        author: 'Maya Angelou',
        content: 'If you don’t like something, change it. If you can’t change it, change your attitude.',
    },
    {
    	id:shortid.generate(),
        author: 'Dalai Lama',
        content: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
    },
    {
    	id:shortid.generate(),
        author: 'Mark Twain',
        content: 'Twenty years from now you will be more disappointed by the things you didn’t do than by the things you did.',
    },
    {   
    	id:shortid.generate(),
        author: 'Estee Lauder',
        content: 'I never dreamed about success. I worked for it.',
    },
    { 
        id:shortid.generate(),
        author: 'George Eliot',
        content: 'It is never too late to be what you might have been.',
    },    
    { 
        id:shortid.generate(),
        author: 'Zig Ziglar',
        content: 'When obstacles arise, you change your direction to reach your goal, you do not change your decision to get there.',
    },
    {
    	id:shortid.generate(),
        author: 'Michelangelo',
        content: 'The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.',
    },
    {
    	id:shortid.generate(),
        author: 'Mark Twain',
        content: 'The two most important days in your life are the day you are born and the day you find out why.',
    },
    {   
    	id:shortid.generate(),
        author: 'Jim Rohn',
        content: 'When you know what you want, and want it bad enough, you’ll find a way to get it.',
    },
    { 
        id:shortid.generate(),
        author: 'Napoleon Hill',
        content: 'A goal is a dream with a deadline.',
    },    
    { 
        id:shortid.generate(),
        author: 'Karen Lamb',
        content: 'A year from now you may wish you had started today.',
    },
    {
    	id:shortid.generate(),
        author: 'Mark Cuban',
        content: 'Work like there is someone else working twenty-four hours a day to take it away from you.',
    },
    {
    	id:shortid.generate(),
        author: 'Nelson Mandela',
        content: 'It always seems impossible until it’s done.',
    },
    {   
    	id:shortid.generate(),
        author: 'Henry David Thoreau',
        content: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    },
    { 
        id:shortid.generate(),
        author: 'Roy T. Bennett',
        content: 'Be grateful for what you already have while you pursue your goals. If you aren’t grateful for what you already have, what makes you think you would be happy with more.',
    },    
    { 
        id:shortid.generate(),
        author: 'Robert Louis Stevenson',
        content: 'Everyone who got where he is has had to begin where he was.',
    },
    {
    	id:shortid.generate(),
        author: 'Albert Einstein',
        content: 'Strive not to be a success, but rather to be of value.',
    },
    {
    	id:shortid.generate(),
        author: 'Wayne Gretzky',
        content: 'You miss 100% of the shots you don’t take',
    },
    {   
    	id:shortid.generate(),
        author: 'Michael Jordan',
        content: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed",
    },
    { 
        id:shortid.generate(),
        author: 'John Lennon',
        content: 'Life is what happens to you while you’re busy making other plans',
    },    
    { 
        id:shortid.generate(),
        author: 'Buddha',
        content: 'The mind is everything. What you think you become',
    },
    {
    	id:shortid.generate(),
        author: 'Chinese Proverb',
        content: 'The best time to plant a tree was 20 years ago. The second best time is now',
    },
    {
    	id:shortid.generate(),
        author: 'Vince Lombardi',
        content: "Winning isn’t everything, but wanting to win is",
    },
    {   
    	id:shortid.generate(),
        author: 'Henry Ford',
        content: "Whether you think you can or you think you can’t, you’re right",
    },
    { 
        id:shortid.generate(),
        author: 'Frank Sinatra',
        content: 'The best revenge is massive success',
    },    
    { 
        id:shortid.generate(),
        author: 'Aristotle',
        content: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing',
    },
    {
    	id:shortid.generate(),
        author: 'John Lennon',
        content: 'When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life',
    },
    {
    	id:shortid.generate(),
        author: 'Japanese Proverb',
        content: 'Fall seven times and stand up eight',
    },
    {   
    	id:shortid.generate(),
        author: 'Anne Frank',
        content: 'How wonderful it is that nobody need wait a single moment before starting to improve the world',
    },
    { 
        id:shortid.generate(),
        author: 'Latin Proverb',
        content: 'If the wind will not serve, take to the oars',
    },    
    { 
        id:shortid.generate(),
        author: 'Erica Jong',
        content: 'You take your life in your own hands, and what happens? A terrible thing, no one to blame',
    },
    {
    	id:shortid.generate(),
        author: 'Benjamin Franklin',
        content: 'I didn’t fail the test. I just found 100 ways to do it wrong',
    },
    {
    	id:shortid.generate(),
        author: 'Chinese Proverb',
        content: 'The person who says it cannot be done should not interrupt the person who is doing it',
    },
    {   
    	id:shortid.generate(),
        author: 'Christine Todd Whitman',
        content: 'Anyone who thinks that they are too small to make a difference has never tried to fall asleep with a mosquito in the room',
    },
    { 
        id:shortid.generate(),
        author: 'Steve Martin',
        content: 'Be so good they can’t ignore you',
    },    
    { 
        id:shortid.generate(),
        author: 'David Brinkley',
        content: 'A successful man is one who can lay a firm foundation with the bricks others have thrown at him',
    },
    {
    	id:shortid.generate(),
        author: 'Thomas A. Edison',
        content: 'Many of life’s failures are people who did not realize how close they were to success when they gave up',
    },
    {
    	id:shortid.generate(),
        author: 'Ray Bradbury',
        content: 'Life is trying things to see if they work',
    },
    {   
    	id:shortid.generate(),
        author: 'George S. Patton',
        content: 'Success is how high you bounce when you hit bottom',
    },
    { 
        id:shortid.generate(),
        author: 'Bruce Lee',
        content: 'The successful warrior is the average man, with laser-like focus',
    },    
    { 
        id:shortid.generate(),
        author: 'Ralph Waldo Emerson',
        content: 'Do not go where the path may lead; go instead where there is no path and leave a trail',
    },
    {
    	id:shortid.generate(),
        author: 'Ralph Waldo Emerson',
        content: 'What you do speaks so loudly that I cannot hear what you say',
    },
    {
    	id:shortid.generate(),
        author: 'Robern Frost',
        content: 'The best way out is always through',
    },
    {   
    	id:shortid.generate(),
        author: 'Steve Jobs',
        content: 'Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn’t really do it, they just saw something. It seemed obvious to them after a while',
    },
    { 
        id:shortid.generate(),
        author: 'Paulo Coelho',
        content: 'Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day',
    },
    {
    	id:shortid.generate(),
        author: 'Jordan Belfort',
        content: "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it",
    },
    {
    	id:shortid.generate(),
        author: 'Roy T. Bennett',
        content: 'Always remember people who have helped you along the way, and don’t forget to lift someone up',
    },
    {   
    	id:shortid.generate(),
        author: 'Lou Holtz',
        content: "You'll never get ahead of anyone as long as you try to get even with him",
    },
    { 
        id:shortid.generate(),
        author: 'Maya Angelou',
        content: 'All great achievements require time',
    },
    {
    	id:shortid.generate(),
        author: 'Roy T. Bennett',
        content: "Don't wait for the right moment to start, start and make each moment right",
    },
    {
    	id:shortid.generate(),
        author: 'Les Brown',
        content: 'Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else',
    },
    {   
    	id:shortid.generate(),
        author: 'Chinese Proverb',
        content: 'When the winds of change blow, some people build walls and others build windmills',
    },
    { 
        id:shortid.generate(),
        author: 'Chinese Proverb',
        content: 'Make happy those who are near, and those who are far will come',
    },
    {
    	id:shortid.generate(),
        author: 'Chinese Proverb',
        content: 'He who returns from a journey is not the same as he who left',
    },
    {
    	id:shortid.generate(),
        author: 'Chinese Proverb',
        content: 'All things are difficult before they are easy',
    }
]

const array = [
    
    {
        id:shortid.generate(),
        img: process.env.PUBLIC_URL + '/cards/i4.jpg',
        author: 'Vince Lombardi',
        content: 'It’s not whether you get knocked down. It’sfffffffffffffffffaaaaaaaffffffffffffffffffffff whether you get up.',
    },
    { 
        id:shortid.generate(),
        img: process.env.PUBLIC_URL + '/cards/i5.jpg',
        author: 'Helen1 Keller',
        content: 'Optimism is the faith that leads to achievement. Nothing can aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabe done without hope and confidence.'
    },    
    { 
        id:shortid.generate(),
        img: process.env.PUBLIC_URL + '/cards/i6.jpg',
        author: 'Confucius1',
        content: 'It does not matter how slowly you go as long as you do aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssnot stop.',
    },
]

export { list, array };