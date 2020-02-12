
# Emoji Rating Review Service

## Install
Clone the repo, install dependencies, run app: 
```sh
git clone git@github.com:ez-li/monograph.git
yarn
yarn start
```

## Thoughts on Final Design
After many product iterations, I settled on an easy emoji rating system (👍,👌,👎) as well as optional emoji hashtags that the diner can add to their review. There are many gripes with the universal 5 star rating system, such as limited expression and occasional sentiment discrepency. Reviews in the old system can be difficult to understand and analyze, for restaurant staff and interested diners alike. A 3 level rating system preserves the idea of an overall score but eliminates minor differences in experience.

Instead, convey the details of a 👍 experience with tags. What happens to the amazing meal that necessitated an unreasonable wait time? A restaurant punished with a 2 star rating? Instead, such feelings can be attached to the review with a tag, like the angry 😡or the disappointed emoji 😩. Have an unusual dining experience? Use the surprise 😮or laughing emoji 😂. These tags can help readers filter results too. For example readers interested in larger party experiences can see results containing the party emoji 🎉. Or check out reviews highlighting the vegetarian options with the leaf emoji 🌿. It allows significantly more meaning than trying to assess the differences between 2 star and 3 star reviews.

![Alt Text](https://media.giphy.com/media/kf3T7CIOLla95dwWFF/giphy.gif)

## Design Specifics

**Emoji Rating System**\
A 3 level rating system using emoji thumbs (👍,👌,👎).

**Emoji Tags**\
Allows users to pick up to 3 emoji hashtags to add to their review. Shows up as clickable buttons in preview. Can only select 3, so must unselect before reselecting. Includes a "Load More" option, to prevent overwhelming user upon first look. Emojis available on load include: ❤️,😎,😮,😥,😡,😶,😋,✨,👏,🌈,🔥,🌶,🎉,🍷,🌿.

**Animations**\
Uses [Animate.CSS library](https://github.com/daneden/animate.css) for simple button animations in preview card upon emoji selection.

**Mobile Viewer**\
Collapsible window, shifting the layout of elements so the preview card appears on top. Preview card elements also shift for easier viewing.

![Alt Text](https://media.giphy.com/media/LSdeRqc3vegglVa6wp/giphy.gif)

## Figma File with Previous Iterations
Link to [Figma File](https://www.figma.com/file/FYGXZPkjH1T4CpTzpiiPe0/Monograph-take-home?node-id=0%3A1)\
Ideas are ordered chronologically, starting with A1 the first iteration, and ending with F2 the final design.
