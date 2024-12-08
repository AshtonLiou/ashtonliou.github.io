document.addEventListener("DOMContentLoaded", () => {
    console.log("%c停止你的動作!%c\n這是專門提供給開發人員的瀏覽器功能\n請勿複製貼上可疑的程式碼\nΣ(っ °Д °;)っ", "color: red; font-size: 4em; font-weight: 900;", "color: yellow; font-size: 2em; font-weight: 900;");
    const themeSwitch = document.getElementById("theme-switch");
    const avatar = document.querySelector("#avatar-wrapper>div");
    const skillText = document.querySelector("#avatar-wrapper>div>div>ul");
    const skillTitle = document.querySelector("#avatar-wrapper>div>div>h3");
    const skill = {
        "HTML": ["SEO優化", "靈活排版", "語意標籤", "結構化設計", "無障礙設計"],
        "CSS": ["美觀製作", "動畫製作", "多樣布局", "響應式設計", "客製化設計"],
        "JAVASCRIPT": ["事件處理", "動畫控制", "動態功能", "資料處理", "效能優化"],
        "PHP": ["邏輯處理", "後端開發", "動態頁面", "API構建", "資料庫操作"],
        "PYTHON": ["網頁應用", "數據分析", "簡單腳本", "資料處理", "自動化任務"],
        "ADOBE AI": ["標誌設計", "矢量插圖", "視覺創意", "海報製作", "圖形優化"],
        "ADOBE PS": ["UI圖標", "視覺設計", "創意合成", "海報設計", "圖片修飾"],
        "ADOBE XD": ["UI框架", "原型設計", "交互動畫", "設計調整", "高效輸出"],
        "SCSS": ["樣式嵌套", "變數運用", "重用混合", "快速調整", "高效管理"],
        "TAILWIND CSS": ["輕量化", "高效構建", "快速佈局", "自訂義設計", "實用類樣式"],
        "BOOTSTRAP": ["快速搭建", "元件應用", "網格系統", "一致布局", "響應式設計"],
        "JQUERY": ["簡化操作", "動畫實現", "事件監聽", "資料請求", "插件應用"],
        "VUE": ["動態數據", "單頁應用", "狀態管理", "指令運用", "組件化開發"],
        "REACT": ["鉤子應用", "狀態管理", "單頁應用", "動態渲染", "虛擬DOM"],
        "MYSQL": ["資料存取", "複雜查詢", "資料優化", "多表操作", "資料庫設計"],
        "GIT": ["版本控制", "代碼備份", "分支管理", "合併衝突", "協作整合"]
    };
    themeSwitch.checked = localStorage.getItem("theme") == "light" ? false : true;
    themeSwitch.onchange = () => {
        let newTheme = themeSwitch.checked ? "dark" : "light";
        document.querySelector("html").setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };
    let isClickable = true;
    let rotationAngle = 0;
    document.querySelectorAll(".skill-marquee>ul>li").forEach(skillButton => {
        skillButton.onclick = () => {
            const updateAvatar = (button) => {
                skillTitle.textContent = button.textContent;
                skillText.replaceChildren();
                skill[button.textContent].forEach(line => {
                    let li = document.createElement("li");
                    li.textContent = line;
                    skillText.appendChild(li);
                });
                rotationAngle += 180;
                avatar.style.transform = `rotateY(${rotationAngle}deg)`;
            };
            if (!isClickable) return;
            isClickable = false;
            if (!avatar.style.transform || parseInt(avatar.style.transform.replace(/[^-\d]/g, "")) % 360 === 0) {
                updateAvatar(skillButton);
                setTimeout(() => isClickable = true, 500);
            } else {
                rotationAngle += 180;
                avatar.style.transform = `rotateY(${rotationAngle}deg)`;
                setTimeout(() => {
                    updateAvatar(skillButton);
                    setTimeout(() => isClickable = true, 500);
                }, 500);
            };
        };
    });
    document.onclick = (event) => {
        if (!isClickable || document.getElementById("avatar-wrapper").contains(event.target) || event.target.closest(".skill-marquee>ul>li")) return;
        if (rotationAngle % 360 === 180) {
            rotationAngle += 180;
            avatar.style.transform = `rotateY(${rotationAngle}deg)`;
        };
    };
});