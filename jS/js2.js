var str = ""; var charp = "# "; var space = "⠀    "
for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) {str += charp;} else  {str += space;}
        }
    }
    else {
        for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) {str += space;} else  {str += charp;}
        }
    }
    str += '\n';
}
alert(str);

