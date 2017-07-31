import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'sw-list',
  template:
  `
    <div class="sw-list">
      <md-list>
        <md-list-item *ngFor="let one of many">
          <div md-line class="accent" (click)="goToDetails(one)">
            <img md-list-avatar [src]="one.avatar">
            <span class="name"> {{one.name}} </span>
          </div>
        </md-list-item>
      </md-list>
    </div>
  `,
  styles: [
    `
    md-list-item {
      cursor: pointer;
    }
    
    /* hack for theme in md-list */
    .sw-list {
      background: #424242;
      color: #fff;
    }
    
    md-list-item img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      flex-shrink: 0;
      vertical-align: middle;
    }
    
    md-list-item .name {
      vertical-align: middle;
      height: 50px;
    }
    
    /* some pseudo css magic to get above vertical align to work */
    md-list-item:before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
  `
  ]
})
export class ListComponent implements OnInit {
  many: any[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const type = params['type'];
      this.update(type);
    });
  }

  goToDetails(one: any) {
    this.router.navigate([one.id], {relativeTo: this.route});
  }

  update(type: string) {
    //this.service.getList(type).subscribe(data => {});
    // dummy data
    const loremNamsum = [
      'Donec quis dolor in leo consectetur vulputate sed ac nunc.',
      'Sed tempus mi sed orci facilisis, vitae varius tortor ultrices.',
      'Vestibulum mattis nibh vel tellus pretium congue.',
      'Nulla mattis turpis et massa egestas, quis lacinia metus pellentesque.',
      'Morbi egestas nulla eu nibh egestas interdum.',
      'Vivamus mattis lorem et hendrerit aliquet.',
      'Fusce feugiat purus a tortor eleifend ullamcorper.',
      'Vivamus tristique sapien non fringilla accumsan.',
      'Nam maximus dolor vel enim sollicitudin ultrices.',
      'Aliquam elementum dui non augue condimentum malesuada.',
      'Aliquam imperdiet lacus a lectus pulvinar vehicula.',
      'Sed id arcu sed enim dignissim accumsan vitae non lacus.',
      'Nam ut neque ut ante auctor vehicula et vitae urna.',
      'Aliquam euismod quam vel orci laoreet convallis.',
      'Sed accumsan metus at convallis aliquam.',
      'Curabitur et sapien pharetra metus fermentum hendrerit at quis sem.',
      'Nullam sodales neque non mattis fringilla.',
      'Nulla sit amet ex in eros tempor pulvinar eu vel libero.',
      'Sed vitae dui convallis, pharetra metus ac, ornare dui.',
      'Nunc porttitor tellus eu dolor facilisis, quis ultrices massa blandit.',
      'Quisque congue velit id turpis lacinia congue.',
      'Pellentesque vitae orci sed eros egestas consequat in semper leo.',
      'Nulla varius nisi eget faucibus condimentum.',
      'Pellentesque id dui vel arcu eleifend congue.',
      'Donec eget dolor luctus, ornare orci at, maximus justo.',
      'Suspendisse rutrum orci vitae diam ultricies lacinia.',
      'Mauris nec lacus posuere, egestas lorem pulvinar, lobortis mi.',
      'Phasellus ac nisl vel libero imperdiet lobortis at a urna.',
      'Vivamus id mauris et nisi auctor mattis.',
      'Vivamus congue urna vel turpis maximus faucibus.',
      'Proin sed odio ac magna eleifend blandit vel eget sem.',
      'Suspendisse dapibus nulla a nisi euismod fringilla eget nec erat.',
      'Sed sed nisi at leo congue consequat a quis lorem.',
      'Nullam ac leo facilisis, maximus lacus et, bibendum metus.',
      'Nunc a lectus sagittis, mattis metus non, varius nulla.',
      'Duis eu dolor placerat libero gravida vehicula nec vitae ex.',
      'Integer sed tortor sit amet dolor elementum luctus et a dui.',
      'Pellentesque pharetra diam eu ex porta scelerisque.',
      'Aenean interdum augue sit amet augue consectetur venenatis.',
      'Cras ac quam lacinia, varius augue bibendum, laoreet metus.',
      'Nunc a lacus consequat, semper elit quis, ullamcorper lacus.',
      'Aenean auctor augue eget sollicitudin accumsan.',
      'Integer mattis velit ut lobortis feugiat.',
      'Mauris tempor mauris vel justo ullamcorper, at ullamcorper massa ultricies.',
      'Etiam pharetra risus non massa rutrum, quis feugiat arcu bibendum.',
      'Aenean cursus elit a magna scelerisque viverra.',
      'Curabitur molestie metus vitae nibh tempus vestibulum.',
      'Phasellus id dolor consequat, commodo nunc et, placerat augue.',
      'Donec eget dui molestie, imperdiet mauris et, vehicula augue.',
      'Etiam malesuada ligula quis justo accumsan, congue dapibus nisl scelerisque.',
      'Nam aliquam enim eu dolor varius consectetur.',
      'Pellentesque maximus felis at metus faucibus tincidunt.',
      'Nunc tincidunt velit vitae nunc tincidunt, et pharetra lorem aliquam.',
      'Aenean non nulla molestie, suscipit augue interdum, fermentum sem.',
      'Sed maximus ex ut ex rutrum, eu suscipit diam malesuada.',
      'Phasellus non tellus nec lorem condimentum eleifend.',
      'Praesent pharetra nisi ac ipsum sollicitudin blandit.',
      'Proin ac lectus sed turpis molestie ultrices.',
      'Aliquam ornare ante nec pulvinar auctor.',
      'Nam sodales augue a metus commodo egestas.',
      'Phasellus mattis eros non justo eleifend vehicula.',
      'Donec eleifend risus vitae orci posuere fringilla.',
      'Quisque pellentesque orci eu scelerisque rhoncus.',
      'Praesent fringilla ante a risus rhoncus, vel sodales quam tristique.',
      'Integer lacinia felis sed nisl cursus, a tincidunt ipsum pharetra.',
      'Mauris efficitur risus sed mauris scelerisque consequat.',
      'Donec lobortis dolor quis pulvinar condimentum.',
      'Fusce scelerisque mi sit amet mollis eleifend.',
      'Nulla a dolor quis mauris semper porttitor.',
      'Aenean sagittis augue facilisis aliquet pellentesque.',
      'Cras porta erat at sagittis fringilla.',
      'Nam vehicula ipsum nec ipsum ullamcorper bibendum.',
      'Nullam quis velit vel ligula interdum vulputate.',
      'Nunc feugiat lectus eu turpis sollicitudin, quis dictum leo dictum.',
      'Aenean vestibulum ante nec lorem venenatis, non imperdiet eros facilisis.',
      'Aenean eu elit placerat, blandit ante sed, fringilla est.',
      'Phasellus egestas felis ac elementum pellentesque.',
      'Suspendisse nec eros id risus ultrices eleifend.',
      'Aliquam fringilla odio nec ipsum posuere, at blandit lorem sodales.',
      'Nullam molestie urna non tellus consequat, et tristique magna malesuada.',
      'Ut in purus in lectus luctus ultrices.',
      'Aenean ultrices ipsum id iaculis tincidunt.',
      'Aenean eu turpis at velit interdum viverra.',
      'Mauris ac ligula sed felis finibus eleifend non in ligula.',
      'Donec molestie justo vel scelerisque maximus.',
      'Curabitur sodales purus at arcu consequat, ac volutpat mi scelerisque.',
      'Sed id lectus ac dolor facilisis scelerisque ac eget ligula.',
      'Suspendisse non ipsum iaculis, vestibulum diam quis, mollis metus.',
      'Quisque eu metus accumsan lacus consequat blandit id in erat.',
      'Praesent rhoncus enim nec nulla blandit aliquet.',
      'Nunc nec turpis eu massa placerat suscipit non eu diam.',
      'Phasellus fringilla nisi quis augue pellentesque placerat.',
      'Praesent eu elit eleifend, tristique quam in, fermentum nisl.',
      'Integer a arcu eget nunc rhoncus pharetra ac sed diam.',
      'Quisque nec mi non sapien gravida mattis finibus eu augue.',
      'Nunc volutpat orci et leo ullamcorper luctus.',
      'Proin vel lorem vitae arcu volutpat ultrices.',
      'Donec in erat ornare, ultrices eros in, condimentum mauris.',
      'Donec non libero et nunc euismod porttitor ut sit amet nunc.',
      'Duis pretium urna sed nunc posuere laoreet.',
      'Fusce rutrum odio tempus vulputate volutpat.',
      'Fusce vel turpis suscipit, tincidunt libero vitae, venenatis odio.',
      'Nunc ac ante aliquam, dapibus dolor id, ultricies lorem.',
      'Morbi ac neque vitae augue accumsan malesuada eu id ex.',
      'Curabitur sagittis metus at lectus tempus tempus.',
      'Etiam in ipsum tempor, ultrices libero sodales, finibus sem.',
      'Quisque luctus leo id metus aliquam elementum sit amet sed nibh.',
      'Donec eu leo sodales, viverra ex sed, mollis eros.',
      'Suspendisse posuere nibh nec nulla auctor, in vestibulum nulla interdum.',
      'Curabitur accumsan nunc sit amet risus dignissim, ut ultrices metus sagittis.',
      'Nullam volutpat nunc a velit tristique faucibus.',
      'Aliquam porta justo sit amet arcu congue fringilla.',
      'Nulla non urna sed neque lobortis elementum.',
      'Etiam sit amet ex vel libero congue facilisis ac viverra urna.',
      'Vivamus gravida nisi et efficitur commodo.',
      'Donec quis felis sit amet est blandit condimentum.',
      'Cras ac neque mollis, blandit justo quis, tincidunt nisi.',
      'Sed accumsan tellus vitae eros posuere, vitae vulputate elit porta.',
      'Proin interdum massa in mi dignissim, vel molestie dolor blandit.',
      'Vestibulum non risus mollis, sollicitudin leo nec, finibus dolor.',
      'Nam vel massa at dui iaculis porttitor.',
      'Aliquam gravida arcu ac dignissim dignissim.',
      'Vestibulum id nunc sodales, vehicula eros a, venenatis erat.',
      'Etiam vulputate mauris ac risus vehicula consequat.',
      'Quisque quis erat ut orci suscipit finibus.',
      'Nulla eget mi sit amet sapien mattis pharetra.',
      'Proin venenatis libero elementum neque placerat facilisis et viverra odio.',
      'Vestibulum fringilla nisi id dictum varius.',
      'Aenean vitae sem in lectus condimentum eleifend.',
      'Aenean eget tortor vitae lacus imperdiet aliquam a sed massa.',
      'Donec id lectus eu neque faucibus pretium non sit amet lectus.',
      'Etiam eu ipsum eget tellus vestibulum viverra.',
      'Suspendisse at massa convallis, fermentum nulla ac, sollicitudin sapien.',
      'Vestibulum condimentum augue non nibh rhoncus ultrices vitae ac urna.',
      'Donec maximus mauris ac pellentesque sollicitudin.',
      'Suspendisse eu nunc sed sem aliquet ultrices id vehicula ante.',
      'In ultrices urna eget velit vulputate, a ultrices nisi convallis.',
      'Mauris eget nibh venenatis, auctor sapien a, porta orci.',
      'Etiam eu sem finibus, pharetra nibh id, congue velit.',
      'Proin non neque ac metus imperdiet gravida.',
      'Aenean molestie mi a fermentum iaculis.',
      'Suspendisse at dolor iaculis, luctus nunc eget, dictum erat.',
      'Aliquam at arcu a lorem feugiat ultricies.',
      'Sed at dolor aliquam, tempor eros nec, dapibus nulla.',
      'Mauris et tortor eu diam congue lobortis faucibus sed velit.',
      'Donec id justo eu dui interdum ullamcorper a sed odio.',
      'Praesent id diam sollicitudin, volutpat risus id, volutpat enim.',
      'Mauris malesuada turpis sit amet massa dictum venenatis.',
      'Suspendisse cursus turpis ut libero mollis sodales.',
      'Sed ac dui malesuada, fringilla nunc vel, ornare tortor.',
      'Sed tempus odio nec felis elementum consectetur.',
      'Vestibulum a leo commodo, interdum nisl in, dictum nisl.',
      'Praesent dignissim ante id libero porttitor sagittis.',
      'Integer porta nunc finibus magna tincidunt mollis.',
      'Vivamus quis nunc et eros vehicula condimentum vestibulum sed neque.',
      'Integer tincidunt eros ut nunc tempor, pulvinar porta sapien finibus.',
      'In sit amet nulla at libero pulvinar blandit a eget lacus.',
      'Quisque id nibh nec erat vestibulum dignissim.',
      'Integer eu mi non erat tincidunt fermentum.',
      'Phasellus sit amet nisi hendrerit, fermentum est sit amet, blandit neque.',
      'Maecenas in elit eget dui tincidunt tristique.',
      'Pellentesque nec eros in turpis aliquet sagittis et ac elit.',
      'Fusce in libero fringilla, molestie odio eget, sodales lacus.',
      'Pellentesque sodales sem vitae ligula sodales, vel maximus lacus tristique.',
      'Phasellus sed purus id felis imperdiet congue vel ut massa.',
      'Proin eu dui at sapien euismod hendrerit.',
      'Vivamus euismod magna sagittis, sodales sem eu, semper turpis.',
      'Nam blandit magna sed mauris elementum, eu pulvinar augue lacinia.',
      'Etiam eu ligula vel ligula dapibus lobortis.',
      'Nunc ac odio et leo sagittis semper et eu sem.',
      'Praesent eu tellus ultrices, luctus est sed, fermentum libero.',
      'Nullam ultricies metus sit amet dolor bibendum luctus.',
      'Proin egestas nulla ut nunc tincidunt, eu ultrices leo maximus.',
      'Ut tristique dolor id enim aliquet malesuada.',
      'Vivamus cursus massa eget sem vehicula finibus.',
      'Nulla ut ex sed elit accumsan fringilla vel id nibh.',
      'Mauris accumsan nunc non arcu consequat, non vestibulum mauris vestibulum.',
      'Nullam sed libero faucibus tellus aliquam commodo.',
      'Fusce non sem faucibus, tincidunt lacus sit amet, ultrices tellus.'
    ];
    this.many = [];
    for (let i = 0; i < 10; i++) {
      this.many.push({
        id: i,
        avatar: 'http://lorempixel.com/50/50/?id=' + i,
        name: loremNamsum[Math.floor(Math.random() * loremNamsum.length)]
      });
    }
  }

}
