$(function () {
    $('.ui.sidebar')
    .sidebar('attach events', '.ui.menu .item.sidebar')
    .sidebar('setting', 'transition', 'overlay');
});