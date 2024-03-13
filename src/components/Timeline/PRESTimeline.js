import $ from 'jquery';

class PRESTimeline {
  base;
  periodContainer;
  cardContainer;
  activePeriod;
  activeCard;
  activePeriodIndex;
  activeCardIndex;
  periodData;
  cardData;
  color;
  timelineNodeContainer;
  timelineData;

  constructor(target, color) {
    this.base = target;
    this.color = color;
    this.periodContainer = $(this.base).find('.periods-container');
    this.cardContainer = $(this.base).find('.cards-container');
    this.timelineNodeContainer = $(this.base).find('.timeline-container .timeline');
    this._parseData();
    this._initialColor();
    this._generateTimeline();
    this._setStateClasses();
    this._assignBtn();
    this._adjustPeriodContainer();
    this._adjustCardContainer();
  }

  // Define other methods of PRESTimeline class here
}

export default PRESTimeline;
