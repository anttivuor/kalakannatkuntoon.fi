import React, { Component } from 'react'
import Modal from 'react-modal';

import CardComponent from '../CardComponent'

//renders a page with statements to be pressed, which open a modal with more information

class Facts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false
  }
}

  render() {
    const { modal1, modal2, modal3, modal4 } = this.state

    return (
      <CardComponent
        title={'Faktat tiskiin'}
        backgroundImage={'./images/1.jpg'}
        cardAlignment={'left'}
      >
        <ul className={'mainList'}>
          <li
            className={'mainListElement cursor'}
            style={{ cursor: 'pointer' }}
            onClick={() => this.setState({ modal1: true })}
          >
            Mistä kampanjassa on kyse?
          </li>
          <li
            className={'mainListElement cursor'}
            style={{ cursor: 'pointer' }}
            onClick={() => this.setState({ modal2: true })}
          >
            Miten vesivoima vaikuttaa ympäristöön?
          </li>
          <li
            className={'mainListElement cursor'}
            style={{ cursor: 'pointer'}}
            onClick={() => this.setState({ modal3: true })}
          >
            Miksi vesivoimaa tulisi vähentää?
          </li>
          <li
            className={'mainListElement cursor'}
            style={{ cursor: 'pointer'}}
            onClick={() => this.setState({ modal4: true })}
          >
            Miksi ovat kampanjan tavoitteet kohderyhmissä?
          </li>
        </ul>
        <Modal className={'Modal'} overlayClassName={'Overlay'} isOpen={modal1} onRequestClose={() => this.setState({ modal1: false })}>
          <ul className={'mediumText'}>
            <li>Vesivoima on laajasti Suomessa levinnyt uusiutuva energiamuoto, joka on leimautunut erityisen ympäristöystävällisenä</li>
            <li>Mediassa vesivoimasta puhutaan positiiviseen sävyyn: kansalaisilla ole oikeaa informaatiota vesivoimaan liittyen</li>
            <li>Harva tietää vesivoiman haitoista, ja monet näkevät sen vain puhtaana, ympäristöystävällisenä energiamuotona</li>
            <li>Meidän tehtävänämme on edistää ihmisten tietoisuutta vesivoiman hyödyistä ja haitoista</li>
            <li>Tavoitteenamme on <b>vesivoiman vähentäminen virtaavissa vesistöissä</b> ja <b>vaelluskalakantojen elvyttäminen</b></li>
          </ul>
        </Modal>
        <Modal className={'Modal'} overlayClassName={'Overlay'} isOpen={modal2} onRequestClose={() => this.setState({ modal2: false })}>
          <ul className={'longText'}>
            <li>Vakavana ongelmana on, että patoja on jo suurimmassa osassa Suomen jokivesistöjä</li>
            <li>Padot häiritsevä esteettistä luonnon kauneutta ja estävät vaelluskalojen liikkumista</li>
            <li>Vesivoiman tuottamiseen rakennettujen patojen seurauksena kalat eivät pääse liikkumaan vapaasti, mikä näkyy rajuna kalakantojen vähenemisenä</li>
            <li>Vaelluskaloista äärimmäisen uhanalaisia ovat järvilohi, Saimaan nieriä, meriharjus ja ankerias</li>
            <li>Lisäksi erittäin uhanalaisia ovat meritaimen ja vaellussiika, sekä vaarantuneessa asemassa ovat lohi, planktonsiika ja karisiika. <a style={{ justifyContent: 'center' }} href={'https://wwf.fi/elainlajit/suomen-uhanalaiset-kalat/'}>(https://wwf.fi/elainlajit/suomen-uhanalaiset-kalat/)</a></li>
            <li>Uhanalaisuus vähentää rajusti kotimaista kalastusta; kotimaisen kalan ostaminen olisi todella ympäristöystävällistä sekä terveellistä varsinkin verrattuna kasvatettuihin tuontikaloihin</li>
            <li>Arvostetun Suomen Kuvalehden artikkelin ”Uhatut eväkkäät” (22.3.2019) mukaan Suomen kalalajeista joka kuudes on uhanalainen, ja artikkelissa mainitaankin syyksi juuri patojen seurauksena rakennetut nousuesteet, jotka estävät jo uhanalaisten kalojen lisääntymisen</li>
          </ul>
        </Modal>
        <Modal className={'Modal'} overlayClassName={'Overlay'} isOpen={modal3} onRequestClose={() => this.setState({ modal3: false })}>
          <ul className={'mediumText'}>
            <li>Vesivoima on prosentuaalisesti hyvin pieni osa Suomen energiantuotannosta, mutta sen negatiiviset ympäristövaikutukset ovat sitäkin merkittävämmät.</li>
            <li>Vesivoiman osuus koko energiantuotannosta Suomessa oli vain noin neljä prosenttia vuonna 2016. Monet energiayhtiöt haluavat nostaa tätä määrää, vaikka se tulisi todella kalliiksi sekä luonnolle että kukkarolle.</li>
            <li>Samalla Suomen arvokkaan luonnon rauha ja kauneus kärsivät massiivisista rakennushankkeista kuten padoista ja säännöstelyaltaista.</li>
          </ul>
        </Modal>
        <Modal className={'Modal'} overlayClassName={'Overlay'} isOpen={modal4} onRequestClose={() => this.setState({ modal4: false })}>
          <ul className={'mediumText'}>
            <li><b>Poliittiset päättäjät</b> - lisää rahaa kalojen suojelemiseksi ja vesivoimalle myönnettyjen tukien vähentäminen</li>
            <li><b>Suomen kansalaiset</b> - Tietoisuuden lisääminen vesivoiman vaikutuksista ja vaihtoehtoisista ratkaisuista sekä osallistaminen erilaisissa hankkeissa</li>
            <li><b>Kalastajaliitot</b> - Vastuullisen kalastamisen edistäminen ja uhanalaisten kalojen vapaaksi päästäminen</li>
            <li><b>Energiayhtiöt</b> - Vastuullisen energiantuotannon edistäminen ja kalateiden rakentaminen patojen kohdille</li>
          </ul>
        </Modal>
      </CardComponent>
    )
  }
}


export default Facts