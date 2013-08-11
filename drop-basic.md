# Drop Basic
A simple, single-column menu.

**HTML Structure:**

    ...
        <li class="dropdown">
            <a href="BACKUP-URL.com">Dropdown 1</a>
            <div class="dropdown-menu dropdown-right">
                <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                </ul>
            </div>
        </li>

        <li class="dropdown">
            <a href="BACKUP-URL.com">Dropdown 2</a>
            <div class="dropdown-menu dropdown-right">
                <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                </ul>
            </div>
        </li>
    ...


## Text Clipping
If a dropdown menu is close to the right edge, add the `.dropdown-right` class to avoid text clipping.
