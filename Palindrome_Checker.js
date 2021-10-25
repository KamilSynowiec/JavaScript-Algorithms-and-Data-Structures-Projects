function palindrome(str) //the input is a String eg. "My age is 0, 0 si ega ym."
{
  let regex=/^a-z0-9/g;                                
  str=str.toLowerCase().replace(regex,'');

  let newArray=[...str]; 
  for(let i=0; i<newArray.length; i++)
  {
    if(newArray[i]!=newArray[newArray.length-1-i])
    {
      return false;
    }
  }
  return true;
}
