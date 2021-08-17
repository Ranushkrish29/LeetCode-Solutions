/**Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
    Input: num1 = "2", num2 = "3"
    Output: "6"
Example 2:
    Input: num1 = "123", num2 = "456"
    Output: "56088" */



//Brute Force Implementation  
// Runtime: 144 ms, faster than 15.78 % of JavaScript online submissions for Multiply Strings.
// Memory Usage: 47.8 MB, less than 6.46 % of JavaScript online submissions for Multiply Strings.

//helps to reverse the given string : 
function reversestring(string) {
    let resutltstring = '';
    for (let i = string.length - 1; i > -1; i--)
        resutltstring += string[i]
    return resutltstring;
}
var multiply = function (num1, num2) {

    //if num1 or num2 is 0 then return '0':
    if (num1 == '0' || num2 == '0')
        return '0';

    //*step 1
    //for the zeros-position of addition :
    let position = '';
    for (let i = 0; i < num1.length - 1; i++)
        position += '0';

    //*step 2
    //multipling the every indiviual digits form num1 with the whole num2 integers and stores in the list in an order:
    let list = [],
        sum = 0;
    //loops throught every single digits in num1:
    for (let i in num1)
        //only non-zero intergers:
        if (num1[i] !== '0') {
            let str = '',
                sum = 0,
                carry = 0,
                mul;
            //gets the required zeros position according to the index:
            str += position.slice(i,);
            //loops throught every single digits in num2 from backwards: 
            for (let j = num2.length - 1; j > -1; j--) {
                mul = num1[i] * num2[j] + carry;
                carry = 0;
                //creates the string by the mulitplied values:
                sum += mul % 10;
                carry = parseInt(mul / 10);
                str += sum;
                sum = 0
            }
            str += carry === 0 ? '' : carry;
            //push the reversed-string to the list:
            list.push(reversestring(str));
        }

    //*step 3
    //to add all the intgers in list from backwords:
    str = '';
    sum = 0;
    carry = 0;
    //loop always run the length of list's-first-element /also list[0]/ times:
    for (let i = 0; i < list[0].length; i++) {
        //loops through all the elements in the list:
        for (let j = 0; j < list.length; j++)
            //adds up with the sum if any digit is present in that required location of the list elements or else adds with 0:
            sum += list[j][(list[j].length - i) - 1] ? list[j][(list[j].length - i) - 1] * 1 : 0;
        //addes to the string by added all list elements perticular digit values:
        str += sum % 10;
        carry = parseInt(sum / 10);
        sum = carry;
    }
    str += carry !== 0 ? carry : '';

    //returns the reversed-string: 
    return reversestring(str);
}

console.log(multiply("60974249908865105026646412538664653190280198809433017", "500238825698990292381312765074025160144624723742"));
//output---> 30501687172287445993560048081057096686019986405658336826483685740920318317486606305094807387278589614

/*Explanation:

step1 creates this:
   0000000000000000000000000000000000000000000000000000

step2 creates this:
   Multipling the every indiviual digits form num1 with the whole num2 integers and stores in the list in an order:

  '30014329541939417542878765904441509608677483424520000000000000000000000000000000000000000000000000000',
  '450214943129091263143181488566622644130162251367800000000000000000000000000000000000000000000000000',
  '35016717798929320466691893555181761210123730661940000000000000000000000000000000000000000000000000',
  '2000955302795961169525251060296100640578498894968000000000000000000000000000000000000000000000000',
  '100047765139798058476262553014805032028924944748400000000000000000000000000000000000000000000000',
  '20009553027959611695252510602961006405784988949680000000000000000000000000000000000000000000000',
  '4502149431290912631431814885666226441301622513678000000000000000000000000000000000000000000000',
  '450214943129091263143181488566622644130162251367800000000000000000000000000000000000000000000',
  '4001910605591922339050502120592201281156997789936000000000000000000000000000000000000000000',
  '400191060559192233905050212059220128115699778993600000000000000000000000000000000000000000',
  '30014329541939417542878765904441509608677483424520000000000000000000000000000000000000000',
  '2501194128494951461906563825370125800723123618710000000000000000000000000000000000000000',
  '50023882569899029238131276507402516014462472374200000000000000000000000000000000000000',
  '2501194128494951461906563825370125800723123618710000000000000000000000000000000000000',
  '10004776513979805847626255301480503202892494474840000000000000000000000000000000000',
  '3001432954193941754287876590444150960867748342452000000000000000000000000000000000',
  '300143295419394175428787659044415096086774834245200000000000000000000000000000000',
  '20009553027959611695252510602961006405784988949680000000000000000000000000000000',
  '3001432954193941754287876590444150960867748342452000000000000000000000000000000',
  '200095530279596116952525106029610064057849889496800000000000000000000000000000',
  '5002388256989902923813127650740251601446247237420000000000000000000000000000',
  '1000477651397980584762625530148050320289249447484000000000000000000000000000',
  '250119412849495146190656382537012580072312361871000000000000000000000000000',
  '15007164770969708771439382952220754804338741712260000000000000000000000000',
  '4001910605591922339050502120592201281156997789936000000000000000000000000',
  '300143295419394175428787659044415096086774834245200000000000000000000000',
  '30014329541939417542878765904441509608677483424520000000000000000000000',
  '2000955302795961169525251060296100640578498894968000000000000000000000',
  '300143295419394175428787659044415096086774834245200000000000000000000',
  '25011941284949514619065638253701258007231236187100000000000000000000',
  '1500716477096970877143938295222075480433874171226000000000000000000',
  '50023882569899029238131276507402516014462472374200000000000000000',
  '45021494312909126314318148856662264413016225136780000000000000000',
  '100047765139798058476262553014805032028924944748400000000000000',
  '40019106055919223390505021205922012811569977899360000000000000',
  '50023882569899029238131276507402516014462472374200000000000',
  '45021494312909126314318148856662264413016225136780000000000',
  '4001910605591922339050502120592201281156997789936000000000',
  '400191060559192233905050212059220128115699778993600000000',
  '4502149431290912631431814885666226441301622513678000000',
  '200095530279596116952525106029610064057849889496800000',
  '15007164770969708771439382952220754804338741712260000',
  '1500716477096970877143938295222075480433874171226000',
  '5002388256989902923813127650740251601446247237420',
  '3501671779892932046669189355518176121012373066194'

step 3 addes all the intgers in list from backwords:

    '30014329541939417542878765904441509608677483424520000000000000000000000000000000000000000000000000000',
      '450214943129091263143181488566622644130162251367800000000000000000000000000000000000000000000000000',
       '35016717798929320466691893555181761210123730661940000000000000000000000000000000000000000000000000',
        '2000955302795961169525251060296100640578498894968000000000000000000000000000000000000000000000000',
         '100047765139798058476262553014805032028924944748400000000000000000000000000000000000000000000000',
          '20009553027959611695252510602961006405784988949680000000000000000000000000000000000000000000000',
           '4502149431290912631431814885666226441301622513678000000000000000000000000000000000000000000000',
            '450214943129091263143181488566622644130162251367800000000000000000000000000000000000000000000',
              '4001910605591922339050502120592201281156997789936000000000000000000000000000000000000000000',
               '400191060559192233905050212059220128115699778993600000000000000000000000000000000000000000',
                '30014329541939417542878765904441509608677483424520000000000000000000000000000000000000000',
                 '2501194128494951461906563825370125800723123618710000000000000000000000000000000000000000',
                   '50023882569899029238131276507402516014462472374200000000000000000000000000000000000000',
                    '2501194128494951461906563825370125800723123618710000000000000000000000000000000000000',
                      '10004776513979805847626255301480503202892494474840000000000000000000000000000000000',
                       '3001432954193941754287876590444150960867748342452000000000000000000000000000000000',
                        '300143295419394175428787659044415096086774834245200000000000000000000000000000000',
                         '20009553027959611695252510602961006405784988949680000000000000000000000000000000',
                          '3001432954193941754287876590444150960867748342452000000000000000000000000000000',
                           '200095530279596116952525106029610064057849889496800000000000000000000000000000',
                             '5002388256989902923813127650740251601446247237420000000000000000000000000000',
                             '1000477651397980584762625530148050320289249447484000000000000000000000000000',
                              '250119412849495146190656382537012580072312361871000000000000000000000000000',
                               '15007164770969708771439382952220754804338741712260000000000000000000000000',
                                '4001910605591922339050502120592201281156997789936000000000000000000000000',
                                 '300143295419394175428787659044415096086774834245200000000000000000000000',
                                 '30014329541939417542878765904441509608677483424520000000000000000000000',
                                  '2000955302795961169525251060296100640578498894968000000000000000000000',
                                   '300143295419394175428787659044415096086774834245200000000000000000000',
                                    '25011941284949514619065638253701258007231236187100000000000000000000',
                                     '1500716477096970877143938295222075480433874171226000000000000000000',
                                       '50023882569899029238131276507402516014462472374200000000000000000',
                                       '45021494312909126314318148856662264413016225136780000000000000000',
                                         '100047765139798058476262553014805032028924944748400000000000000',
                                          '40019106055919223390505021205922012811569977899360000000000000',
                                             '50023882569899029238131276507402516014462472374200000000000',
                                             '45021494312909126314318148856662264413016225136780000000000',
                                              '4001910605591922339050502120592201281156997789936000000000',
                                               '400191060559192233905050212059220128115699778993600000000',
                                                 '4502149431290912631431814885666226441301622513678000000',
                                                  '200095530279596116952525106029610064057849889496800000',
                                                   '15007164770969708771439382952220754804338741712260000',
                                                    '1500716477096970877143938295222075480433874171226000',
                                                       '5002388256989902923813127650740251601446247237420',
                                                       '3501671779892932046669189355518176121012373066194'  by adding all the numbers we get the answer string:
-----------------------------------------------------------------------------------------------------------------
     30501687172287445993560048081057096686019986405658336826483685740920318317486606305094807387278589614
------------------------------------------------------------------------------------------------------------------

  ] */