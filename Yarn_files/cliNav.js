$(function(){
    var html = `
    <ul class="nav nav-stacked guide-nav">
      
        <li class="nav-item">
          
            <a class="nav-link" href="/CLI.html">
              CLI介绍
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliadd.html">
              yarn add
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clibin.html">
              yarn bin
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clicache.html">
              yarn cache
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clicheck.html">
              yarn check
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliclean.html">
              yarn clean
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliconfig.html">
              yarn config
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cligenerate-lock-entry.html">
              yarn generate-lock-entry
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliglobal.html">
              yarn global
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliinfo.html">
              yarn info
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliinit.html">
              yarn init
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliinstall.html">
              yarn install
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clilicenses.html">
              yarn licenses
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clilink.html">
              yarn link
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clilogin.html">
              yarn login
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clilogout.html">
              yarn logout
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clils.html">
              yarn ls
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clioutdated.html">
              yarn outdated
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliowner.html">
              yarn owner
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clipack.html">
              yarn pack
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clipublish.html">
              yarn publish
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliremove.html">
              yarn remove
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clirun.html">
              yarn run
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliself-update.html">
              yarn self-update
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clitag.html">
              yarn tag
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliteam.html">
              yarn team
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Clitest.html">
              yarn test
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliunlink.html">
              yarn unlink
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliupgrade.html">
              yarn upgrade
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliversion.html">
              yarn version
            </a>
          
        </li>
      
        <li class="nav-item">
          
            <a class="nav-link" href="/Cliwhy.html">
              yarn why
            </a>
          
        </li>
      
    </ul>
  `;
  window.selectCliNav = function(page){
    $('#cliNav').html(html);
    $('#cliNav').find('a[href="/' + page + '.html"]').removeAttr('href').addClass('active');
  }
});