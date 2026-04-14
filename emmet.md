# Emmet Cheat Sheet

## Basic Elements

```
div                 → <div></div>
p                   → <p></p>
span                → <span></span>
a                   → <a href=""></a>
img                 → <img src="" alt="">
input               → <input type="text">
button              → <button></button>
```

## Classes & IDs

```
div.container       → <div class="container"></div>
p.text              → <p class="text"></p>
div#header          → <div id="header"></div>
span.btn.primary    → <span class="btn primary"></span>
```

## Multiplication

```
li*5                → Creates 5 <li> elements
div.box*3           → Creates 3 divs with class "box"
```

## Child (>)

```
div>p               → <div><p></p></div>
ul>li*3             → <ul><li></li><li></li><li></li></ul>
nav>ul>li*4>a       → nav with ul containing 4 li elements with links
```

## Sibling (+)

```
div+p               → <div></div><p></p>
h1+p+p              → <h1></h1><p></p><p></p>
```

## Climb-up (^)

```
div>p^div           → <div><p></p></div><div></div>
div>ul>li^^div      → Goes up 2 levels
```

## Grouping ()

```
(div>p)*3           → Creates 3 div>p groups
(header>nav)+main   → header with nav, then main
```

## Text {}

```
a{Click me}         → <a href="">Click me</a>
p{Hello World}      → <p>Hello World</p>
li*3{Item }         → <li>Item </li> (3 times)
```

## Numbering $

```
li.item$*3          → <li class="item1">...</li> item2, item3
div#box$*4          → <div id="box1">... box2, box3, box4
img[src="img$.jpg"]*3  → img1.jpg, img2.jpg, img3.jpg
```

## Attributes []

```
a[href="#"]         → <a href="#"></a>
input[type="email"] → <input type="email">
img[src="pic.jpg" alt="Photo"]
div[data-id="123"]  → <div data-id="123"></div>
```

## Common HTML5 Structures

```
!                   → Full HTML5 boilerplate
html:5              → Same as above
link:css            → <link rel="stylesheet" href="style.css">
script:src          → <script src=""></script>
```

## Forms

```
form:post           → Form with POST method
input:text          → <input type="text">
input:email         → <input type="email">
input:password      → <input type="password">
input:checkbox      → <input type="checkbox">
input:radio         → <input type="radio">
select>option*5     → Select with 5 options
```

## Common Patterns

```
ul>li*5>a           → Unordered list with 5 links
table>tr*3>td*4     → Table with 3 rows, 4 columns each
dl>dt+dd            → Definition list item
```

## Your Specific Examples

```
section.tool                          → <section class="tool"></section>
li.option*8                           → 8 li elements with class "option"
ul.options>li.option*3>i.fa+span      → List with icons and text
```

## Pro Tips

- Press **Tab** to expand Emmet abbreviation
- Works in HTML, JSX, and CSS files
- Can be used with CSS selectors in VS Code
- Combine multiple techniques: `nav>ul.menu>li.item$*5>a{Link $}`

## VS Code Format Shortcut

- **Windows/Linux:** `Shift + Alt + F`
- **Mac:** `Shift + Option + F`
- **Or:** Right-click → Format Document
- **Install Prettier extension** for best results