function palindrome(str) 
{
  let regex=/\s/g;
  str=str.toLowerCase().replace(regex,'');

  let newArray=[...str];
  for(let i=0; i<newArray.length; i++)
  {
    console.log(newArray[i]);
    if(newArray[i]!=newArray[newArray.length-1-i])
    {
      return false;
    }
  }
  return true;
}
