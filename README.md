## Bench Accounting Code Test

This branch includes some extra work I did beyond the scope of the original requirements. I have omitted any duplicate documentation here from the main branch.
<br/>
<br/>
<br/>

### Main Screen

![Main Screen](https://github.com/jsaelhof/bench-test/blob/50a5b3cb1446068a9ad0b75d548775077314a953/images/screen_expenses.png "Main Screen")

After looking over the transaction data, I noticed that transactions could be grouped and subtotaled to provide the user with a category-level breakdown of their expenses. I enjoy data visualization so I took the opportunity to pull some additional insights from the data. I believe that there is often a better option for the user to understand data than displaying it simply in tabular form. Often by talking with users, designers can learn what information is really important within the data and can usually find a way to present that key information and insights in a manner that is much quicker and easier to consume. In this case, a user may be interested to learn that equipment represents over 50% of the expenses for the month, more than double the next largest category. This information is not easily discernible by looking at a tabular list. They may find these insights actionable in their daily business, perhaps taking a closer look at equipment expenses.

I used another functional flow from lodash to process the list of transactions into an ordered array of category data. I used React-Vis to create a donut chart showing the breakdown and rendered each category below the chart with its subtotal and corresponding chart color.

In a real-world scenario, this would likely need more analysis to understand how many categories would realistically be present and how that dynamic nature of the information would affect a final design.
<br/>
<br/>
<br/>

### Notable Dependencies

- React-Vis: Composable React charting library
