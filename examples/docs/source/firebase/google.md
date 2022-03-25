# Firebase第三方登录（google）

:::tip
资料整理: 付永顺   
更新日期: 2022-03-01
:::

**网址**：https://firebase.google.com

**准备**：需公司申请一个firebase账号，相应的开发人员开通相应权限
**要求**：开发此项目必须开启VPN

参考文档：https://firebase.google.com/docs/auth/web/google-signin?authuser=0

#### 步骤一：创建项目

![1642474884087](./img/1.png)

#### 步骤二：添加对应应用

![1642475633377](./img/2.png)

完成后点开相应的设置，即可看到详细信息和配置（根据需要npm安装或CDN引入）

![1642475948161](./img/3.png)

#### 步骤三：设置第三方授权登录信息

![1642476383456](./img/4.png)

#### 步骤四：js项目中使用

js中安装firebse

```javascript
yarn add firebase
```

项目中导入

```javascript
import {
    initializeApp
} from 'firebase/app';
//基本配置和添加应用生成的配置保持一致
const firebaseConfig = {
    apiKey: 'AIzaSyAw1ksogZT8qxk1lanacGsdJm9CkTB9OcY',
    authDomain: 'causal-bindery-334409.firebaseapp.com',
    projectId: 'causal-bindery-334409',
    storageBucket: 'causal-bindery-334409.appspot.com',
    messagingSenderId: '559420313769',
    appId: '1:559420313769:web:6b5f50e8e02845a010d9b8',
    measurementId: 'G-S8W5K9JVLQ'
};
// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//创建 Google 提供方对象实例(signInWithPopup,signInWithRedirect使用弹窗或者使用从定向)
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
const auth = getAuth();
const provider = new GoogleAuthProvider();
```

```javascript
// 第三方谷歌登录
googleLogin() {
    signInWithPopup(auth, provider)
        .then((result) => {
            //result有用户的信息，根据后端要求拿需要的，如果是弹窗,授权成功会自动关闭弹窗
            //这里处理你需要的逻辑
        })
        .catch((error) => {
            //可处理授权失败后的逻辑
            console.log(error, '错误信息');
        });
},
```

**可能出现的问题：**

问题一：无法唤起第三方登录弹窗？

原因：网络请求报错，拿不到步骤三设置的白名单网域(重新检查配置、VPN不稳定等）、环境问题和运维沟通

```javascript
{
    "projectId": "559420313769",
    "authorizedDomains": [
        "localhost",
        "causal-bindery-334409.firebaseapp.com",
        "causal-bindery-334409.web.app",
        "www.test_auth_login.cc",
        "www.aextest.cc",
        "www.aex.cash",
        "aex1.yxds.net.cn",
        "www.aex.com"
    ]
}
```

问题二：正式环境无法弹起

原因：可能需要运维将https://apis.google.com、https://identitytoolkit.googleapis.com、https://www.googleapis.com等添加到Content-Security-Policy(csp)，具体看报错

**优化问题：**

 `这不是bug，只是浏览器的特性，能处理的是第三方的退出和登录。如第三方每次登陆需要输入密码和账户的话，那第三方登录就没啥意义了，只是阐述有这么个问题存在，不是设置了没效果`

问题三：第一次授权登录后，会自动记录Google账号，不能切换谷歌账号（除非手动清除浏览器缓存）

原因：授权登录后，谷歌浏览器会自动授权登录google账号，其他浏览器也记录了账户和密码

**代码优化（两种方式）**

方式一：firebase中的signOut方法

```js
import {
    getAuth,
    signOut
} from "firebase/auth";

const auth = getAuth();

signOut(auth).then(() => {

    //这里写退出登录后的逻辑处理

    // Sign-out successful.

}).catch((error) => {

    // An error happened.

});
```

方式二：修改firebase身份验证状态保留方式, firebase里面有三种Auth状态保留(local、session、none)，上述情况是默认的local保留, 现在改为session(以signInWithPopup为例)

网址：https://firebase.google.com/docs/auth/web/auth-state-persistence?authuser=0

```js
import {
    getAuth,
    setPersistence,
    signInWithPopup,
    browserSessionPersistence
} from "firebase/auth";

const auth = getAuth();

//browserSessionPersistence改为session固定写法

setPersistence(auth, browserSessionPersistence)

    .then(() => {

        //return signInWithEmailAndPassword(auth, email, password);

        //return signInWithRedirect(auth, provider);

        return signInWithPopup(auth, provider) //根据你使用的方式进行修改,对应上述的导入方式

    })

    .catch((error) => {

        const errorCode = error.code;

        const errorMessage = error.message;

    });
```

完整代码

```js
// 第三方谷歌登录
googleLogin() {
    signOut(auth).then(() => {
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                return signInWithPopup(auth, provider)
                    .then((result) => {
                        console.log(result, '用户信息');
                    })
                    .catch((error) => {
                        console.log(error, '错误信息');
                    });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    });
},
```

**非代码处理（针对浏览器）**

谷歌：进行谷歌授权登录后，谷歌浏览器会自动授权登录谷歌账号，手动退出浏览器的谷歌账号即可

非谷歌+谷歌：在浏览器设置中不勾选记录账号和密码即可

后续有补充再添加...
