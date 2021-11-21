var n=5;
var star="";
for(var i=1;i<=n;i++)
{
  for(var j=1;j<=n-i;j++)
  {
    star+=" ";
  }
  for(var k=0;k<2*i-1;k++)
  {
    if(i==n)
    {
      star+="*";
    } 
    else
    {
      if(k==0|| k==2*i-2)
      {
        star+="*";
      }
      else 
      {
        star+=" ";
      }
    }
  }
  star += "\n";
}
console.log(star);
