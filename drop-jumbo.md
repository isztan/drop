# Drop Jumbo
A full-screen, multi-column menu. Drop Jumbo uses the grid system from [Kraken](http://cferdinandi.github.io/kraken/) for the column structure. Feel free to use whatever grid you prefer.

**HTML Structure:**

    ...
        <li class="dropdown">
            <a href="#">Dropdown 1</a>
            <div class="dropdown-menu">
                <div class="container">
                    <div class="row">
                        <div class="grid-3">
                            <strong>List 1</strong>
                            <ul>
                                <li><a href="#">Item 1</a></li>
                                <li><a href="#">Item 2</a></li>
                                <li><a href="#">Item 3</a></li>
                            </ul>
                        </div>
                        <div class="grid-3">
                            <strong>List 2</strong>
                            <ul>
                                <li><a href="#">Item 1</a></li>
                                <li><a href="#">Item 2</a></li>
                                <li><a href="#">Item 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="dropdown">
            <a href="#">Dropdown 2</a>
            <div class="dropdown-menu">
                <div class="container">
                    <div class="row">
                        <div class="grid-2">
                            <strong>List 3</strong>
                            <ul>
                                <li><a href="#">Item 1</a></li>
                                <li><a href="#">Item 2</a></li>
                                <li><a href="#">Item 3</a></li>
                            </ul>
                        </div>
                        <div class="grid-2">
                            <strong>List 4</strong>
                            <ul>
                                <li><a href="#">Item 1</a></li>
                                <li><a href="#">Item 2</a></li>
                                <li><a href="#">Item 3</a></li>
                            </ul>
                        </div>
                        <div class="grid-2">
                            <strong>List 5</strong>
                            <ul>
                                <li><a href="#">Item 1</a></li>
                                <li><a href="#">Item 2</a></li>
                                <li><a href="#">Item 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    ...
