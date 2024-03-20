document.addEventListener('DOMContentLoaded', function () {
    var animation1 = document.getElementById('animation1');
    var animation2 = document.getElementById('animation2');
    var footer = document.querySelector('.footer');

    animation1.style.display = 'block'; // 显示第一个动画元素
    animation2.style.display = 'block'; // 显示第2个动画元素

    animation1.addEventListener('animationend', function () {
        animation1.style.display = 'none'; // 隐藏第一个动画元素
        animation2.style.display = 'block'; // 显示第二个动画元素

        animation2.addEventListener('animationend', function () {
            animation2.style.display = 'none'; // 隐藏第二个动画元素
            footer.style.display = 'block'; // 显示名字
                
            
        });
    });
});
