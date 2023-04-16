export default class ApartmentsSVG {
  constructor(color) {
    this.color = color;
  }

  renderSVGroom() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
     svg.innerHTML = `
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.29734V10.25C0 10.4929 0.232224 10.7189 0.602615 10.7189C0.811758 10.7189 1.07139 10.4592 1.07139 10.25V9.64705H13.9286V10.25C13.9286 10.4929 14.1608 10.7189 14.5313 10.7189C14.7404 10.7189 15 10.4592 15 10.25V6.29734C15 5.57988 14.244 4.82349 13.5268 4.82349H1.47322C0.755987 4.82349 0 5.57988 0 6.29734Z" fill="${this.color}"/>
     <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60742 0.468982V3.7517H3.21455V3.3497C3.21455 1.89681 4.58434 2.14379 5.75924 2.14379C6.51688 2.14379 6.96455 2.59166 6.96455 3.3497V3.7517H8.03603V3.3497C8.03603 1.89681 9.40574 2.14379 10.5806 2.14379C11.3384 2.14379 11.786 2.59166 11.786 3.3497V3.7517H13.3932V0.468982C13.3932 0.259828 13.1335 0 12.9245 0H2.07612C1.86706 0 1.60742 0.259828 1.60742 0.468982Z" fill="${this.color}"/>
    </svg>
    
    `;


    return svg.lastElementChild
  }

  renderSVGsize() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")

    
    svg.innerHTML = `
    <svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.31641 10.0195V13.3008C8.31641 14.2275 9.07157 15 9.89776 15H13.4119C14.2206 15 14.9932 14.227 14.9932 13.418V9.90235C14.9932 9.07408 14.2196 8.32031 13.2947 8.32031H10.0149C9.07667 8.32031 8.31641 9.0809 8.31641 10.0195Z" fill="${this.color}"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.90235V13.418C0 14.227 0.772661 15 1.58135 15H5.09549C5.92003 15 6.67677 14.2286 6.67677 13.3008V10.0195C6.67677 9.0809 5.91658 8.32031 4.9783 8.32031H1.69847C0.772248 8.32031 0 9.0758 0 9.90235Z" fill="${this.color}"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.58203V5.09769C0 5.92424 0.772248 6.67965 1.69847 6.67965H4.9783C5.91568 6.67965 6.67677 5.91824 6.67677 4.98045V1.69921C6.67677 0.77389 5.9234 0 5.09549 0H1.58135C0.772661 0 0 0.772994 0 1.58203Z" fill="${this.color}"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.31641 1.69921V4.98045C8.31641 5.919 9.07873 6.67965 10.0149 6.67965H13.2947C13.7891 6.67965 14.2169 6.46585 14.4741 6.21889C14.7175 5.9851 14.9932 5.55976 14.9932 5.09769V1.58203C14.9932 0.772994 14.2206 0 13.4119 0H9.89776C9.07157 0 8.31641 0.77258 8.31641 1.69921Z" fill="${this.color}"/>

      </svg>
    
    `;

    return svg.lastElementChild
  }
}
