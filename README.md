# Curriculum vitae
## Name

First name: **Grygorii**

Last name: **Lysytsia**
## Contact Information

- Phone: **+7-918-548-49-84**

- E-mail: **grygorii_lysytsia@hotmail.com**

- Telegramm: **@FantasticFox007**

- Facebook: **https://www.facebook.com/grigoriy.lisitsa**
---
## About me
>I am frontend developer on the begining of my education so much learned and so much still need to be learned. Today I know more that I have known yesterday. I have completed Dark Souls, Dark Souls 2, Dark Souls 3, Bloodborne, Sekiro Shadow die twice games do I need tell more to you about my perseverance. My motto is "Nothing is impossible".

## Skills
HTML, CSS, SASS, BEM, Adaptive and responsive layouts, Webpage image optimization, JS Basic, Git, Figma, Gulp
---
## Code examples

```
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let oldCarPrice = startPriceOld;
  let newCarPrice = startPriceNew;
  let percent = percentLossByMonth;
  let savedMoney = 0;
  if(startPriceOld >= startPriceNew){
    return [0,startPriceOld - startPriceNew]
  }else{
    for(let i = 1; startPriceOld <= startPriceNew; i++){
      if(savedMoney >= newCarPrice){
      return [i-1,Math.round(savedMoney-newCarPrice)]
      }else if(i % 2 === 0){
        percent += 0.5
        oldCarPrice = oldCarPrice - (oldCarPrice*(percent/100));
        newCarPrice = newCarPrice - (newCarPrice*(percent/100));
        savedMoney = oldCarPrice + (savingperMonth*i) 
      }else{
        oldCarPrice = oldCarPrice - (oldCarPrice*(percent/100));
        newCarPrice = newCarPrice - (newCarPrice*(percent/100));
        savedMoney = oldCarPrice + (savingperMonth*i) 
      }
    }
  }
}
```
---
## Education

***Donetsk National University***

**Historical faculty**

*Specialist Internation relations and foreign policy*

2008-2013
### Self-education

1. HTML, CSS, JS in [HTMLacademy](https://htmlacademy.ru/profession/frontender) (Still learning)
2.  [Udemy course "The Complete Web Developer in 2022: Zero to Mastery"](https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/)
3.  [Textbook JS](https://learn.javascript.ru/)
4.  [CodeWars](https://www.codewars.com/users/Towerman)
---
## English
_Upper-intermediate (B1)_