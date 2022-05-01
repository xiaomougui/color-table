let r = $('#range1').prop("value");
let g = $('#range2').prop("value");
let b = $('#range3').prop("value");

let a = new Date();
let hours = a.getHours();
let minutes = a.getMinutes();

let color_hour = hours + minutes / 60;

if (color_hour >= 0 && color_hour <= 5) {
    r = 0;
    g = 0;
    b = 0;
    b += color_hour * 16;
}
else if (color_hour > 5 && color_hour <= 13) {
    r = 255;
    g = 255;
    b = 255;
    g -= ((color_hour - 5) * 115 / 8);
}
else if (color_hour > 13 && color_hour <= 18) {
    r = 255;
    g = 140;
    b = 255;
    g += ((color_hour - 13) * 115 / 5);
}
else if (color_hour > 18 && color_hour <= 19) {
    r = 246;
    g = 57;
    b = 10;
}
else if (color_hour > 19 && color_hour < 24) {
    r = 0;
    g = 0;
    b = 80;
    b -= (color_hour - 19) * 16;
}

//加载完毕执行
window.onload = () => {
    $('#rangespan1').text(r);
    $('#rangespan2').text(g);
    $('#rangespan3').text(b);
    console.log(color_hour);
    console.log(r, g, b);
    $('.color-control').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
    // console.log(r, g, b);
}

//范围条改变时，颜色变化
$('#range1').change(() => {
    r = $('#range1').prop("value");
    $('#rangespan1').text(r);
    $('.color-control').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
})
$('#range2').change(() => {
    g = $('#range2').prop("value");
    $('#rangespan2').text(g);
    $('.color-control').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
})
$('#range3').change(() => {
    b = $('#range3').prop("value");
    $('#rangespan3').text(b);
    $('.color-control').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
})



// //天空颜色随时间的变化
// r = (255 - C / sqrt(1 - cos(m_time)) * 0.73);
// g = (255 - C / sqrt(1 - cos(m_time)) * 0.05);
// b = (255 - C / sqrt(1 - cos(m_time)) * 0.07);

// let C = 8.0;
// //太阳颜色随时间的变化
// r = (255 - C / ((Math.sqrt(1 - Math.cos(hours))) * 0.73));
// g = (255 - C / ((Math.sqrt(1 - Math.cos(hours))) * 0.05));
// b = (255 - C / ((Math.sqrt(1 - Math.cos(hours))) * 0.07));