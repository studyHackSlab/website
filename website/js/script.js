document.addEventListener('DOMContentLoaded', (event) => {

    const image = document.getElementById('Image');

    // 2秒ごとに実行したい関数
    function myFunction() {
        image.classList.add("img_big");
    }
    function myFunction_remove() {
        image.classList.remove("img_big");
    }

    // setInterval(myFunction, 2000);
    // setInterval(myFunction_remove, 3000);

    function createBubble() {
        let bubble = document.createElement('div');
        bubble.classList.add('bubble');
        document.body.appendChild(bubble);
    }

    function removeBubble() {
        document.body.remove(bubble);
    }

    // 1秒間隔で新しいシャボン玉を生成
    // setInterval(createBubble, 2000);
    // setInterval(removeBubble, 3000);
});