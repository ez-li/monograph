
# Emoji Rating Review Service

## Thoughts on Final Design
After many product iterations, I settled on an easy emoji rating system (👍,👌,👎) as well as optional emoji hashtags that the diner can add to their review. There are many gripes with the universal 5 star rating system, such as limited expression and occasional sentiment discrepency. Reviews in the old system can be difficult to understand and analyze, for restaurant staff and interested diners alike. A 3 level rating system preserves the idea of an overall score but eliminates minor differences in experience.

Convey the details of a 👍 experience with tags. What happens to the amazing meal that necessitated an unreasonable wait time? A restaurant punished with a 2 star rating? Instead, such feelings can be attached to the review with a tag, like the angry 😡or the disappointed emoji 😩. Have an unusual dining experience? Use the surprise 😮or laughing emoji 😂. These tags can helpful for readers to filter results too. For example readers interested in larger party experiences can see results containing the party emoji 🎉. Or check out reviews highlighting the vegetarian options with the leaf emoji 🌿. It allows significantly more meaning than trying to assess the differences between 2 star and 3 star reviews.

![Alt Text](https://media.giphy.com/media/kf3T7CIOLla95dwWFF/giphy.gif)

## Design Specifics

**Emoji Rating System**\
A 3 level rating system using emoji thumbs (👍,👌,👎), highlights on hover, animates in preview.

**Emoji Tags**\
Allows users to pick up to 3 emoji hashtags to add to their review, also highlights on hover and animates in preview. Shows up as clickable buttons in preview. Can only select 3, so must unselect before reselecting. Includes a "Load More" option, to prevent overwhelming user upon first look. Emojis available on load include: ❤️,😎,😮,😥,😡,😶,😋,✨,👏,🌈,🔥,🌶,🎉,🍷,🌿.

**Mobile Viewer**\
Collapsible window, shifting the layout of elements so the preview card appears on top. Preview card elements also shift for easier viewing.

![Alt Text](https://media.giphy.com/media/LSdeRqc3vegglVa6wp/giphy.gif)

## Figma File with Previous Iterations
Link to [Figma File](https://www.figma.com/file/FYGXZPkjH1T4CpTzpiiPe0/Monograph-take-home?node-id=0%3A1)\
Ideas are ordered chronologically, starting with A1 the first iteration, and ending with F2 the final design.


# Monograph challenge goals
We're a team that prides itself on building software that is wonderful to use (almost magical), and this challenge hopes to surface candidates that align with that way of building. How we gauge the test is based on the following metrics:

#### Product thinking
Iterate concepts (preferrably in Figma), articulate ideas (in text), and ultimately execute in code
#### Styling and transitions
To build magical software, whimsy and delight are taken extra seriously at Monogragh. We'd love to see your instinctual take on a simple form option input. CSS is a core strength of our team.
#### Basic react knowledge
We're more concerned with your product skills than your intimate knowledge of react lifecycle methods. Feel free to implement the most basic version of react with props passed to the children and back to the parent. 

## Deliverables
- Link to a public github repo with your code
- One paragraph (or more) write-up about your product decision
- *(bonus)* Figma mock-up of different concepts
- *(bonus)* Animations and/or transitions when options are selected

## Getting started
- Clone the repo: `git clone git@github.com:monographhq/test-review.git`
- Install dependencies: `yarn`
- Make sure the app runs: `yarn start`

## Frontend Challenge

### Dining review app

Design Reference: [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1)

![Dining App](/app.png)

1. **Dynamic inputs** - The Preview section on the right has static placeholder text. Wire up the app so that anything typed in both the feedback and party inputs updates the preview on the right.

2. **Product decision** - We're a small team at Monograph so you may be asked to make recommendations based on a feature we're building. Code from scratch, modify a library, or use a best practice idea is often a decision we're confronted with. You'll be adding an emoji selector to the form on the left. In the [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1) we've added a few ideas, but we'd like to see your thinking around the best way to implement a feature which allows a user to express their emotions after dining somewhere.

    In your README doc, write a few sentences about why you might pick a certain direction. Feel free to copy the Figma file and test ideas visually. 

3. **Add emoji selector** - Now implement your idea in code and render it on the right in the Preview section.
4. **Style preview card** - Based on the [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1), add CSS styling to the Preview area. In Figma you can click the "Code" tab in the upper right to get the relevant CSS values for each element you click.
5. **Responsive styling** - Now that your Preview is looking good, we need to make the app work for mobile users. We'd like the Preview section to be on top in mobile and everything to look similar to the Figma mockup. Don't worry about tablet styling for now, this is just for mobile.
