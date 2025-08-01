// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImagePreview from '../common/image-preview';
import {SetExportImageSettingUpdaterAction} from '@kepler.gl/actions';

import {EXPORT_IMG_RATIO_OPTIONS, EXPORT_IMG_RESOLUTION_OPTIONS} from '@kepler.gl/constants';
import {ExportImage} from '@kepler.gl/types';
import {StyledModalContent, SelectionButton, CheckMark} from '../common/styled-components';
import Switch from '../common/switch';
import {injectIntl, IntlShape} from 'react-intl';
import {FormattedMessage} from '@kepler.gl/localization';

const ImageOptionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 250px;

  .image-option-section {
    .image-option-section-title {
      font-weight: 500;
      font-size: 14px;
    }
  }

  .button-list {
    display: flex;
    flex-direction: row;
    padding: 8px 0px;
  }

  input {
    margin-right: 8px;
  }
`;

export interface ExportImageModalProps {
  exportImage: ExportImage;
  mapW: number;
  mapH: number;
  onUpdateImageSetting: (payload: SetExportImageSettingUpdaterAction['payload']) => void;
  cleanupExportImage: () => void;
  intl: IntlShape;
}

const ExportImageModalFactory = () => {
  const ExportImageModal: React.FC<ExportImageModalProps> = ({
    mapW,
    mapH,
    exportImage,
    onUpdateImageSetting,
    cleanupExportImage,
    intl
  }) => {
    const {legend, ratio, resolution} = exportImage;

    useEffect(() => {
      onUpdateImageSetting({
        exporting: true
      });
      return cleanupExportImage;
    }, [onUpdateImageSetting, cleanupExportImage]);

    useEffect(() => {
      if (mapH !== exportImage.mapH || mapW !== exportImage.mapW) {
        onUpdateImageSetting({
          mapH,
          mapW
        });
      }
    }, [mapH, mapW, exportImage, onUpdateImageSetting]);

    return (
      <StyledModalContent className="export-image-modal">
        <ImageOptionList>
          <div className="image-option-section">
            <div className="image-option-section-title">
              <FormattedMessage id={'modal.exportImage.ratioTitle'} />
            </div>
            <FormattedMessage id={'modal.exportImage.ratioDescription'} />
            <div className="button-list" id="export-image-modal__option_ratio">
              {EXPORT_IMG_RATIO_OPTIONS.filter(op => !op.hidden).map(op => (
                <SelectionButton
                  key={op.id}
                  selected={ratio === op.id}
                  onClick={() => onUpdateImageSetting({ratio: op.id})}
                >
                  <FormattedMessage id={op.label} />
                  {ratio === op.id && <CheckMark />}
                </SelectionButton>
              ))}
            </div>
          </div>
          <div className="image-option-section">
            <div className="image-option-section-title">
              <FormattedMessage id={'modal.exportImage.resolutionTitle'} />
            </div>
            <FormattedMessage id={'modal.exportImage.resolutionDescription'} />
            <div className="button-list" id="export-image-modal__option_resolution">
              {EXPORT_IMG_RESOLUTION_OPTIONS.map(op => (
                <SelectionButton
                  key={op.id}
                  selected={resolution === op.id}
                  onClick={() => op.available && onUpdateImageSetting({resolution: op.id})}
                >
                  {op.label}
                  {resolution === op.id && <CheckMark />}
                </SelectionButton>
              ))}
            </div>
          </div>
          <div className="image-option-section">
            <div className="image-option-section-title">
              <FormattedMessage id={'modal.exportImage.mapLegendTitle'} />
            </div>
            <Switch
              type="checkbox"
              id="add-map-legend"
              checked={legend}
              label={intl.formatMessage({id: 'modal.exportImage.mapLegendAdd'})}
              onChange={() => onUpdateImageSetting({legend: !legend})}
            />
          </div>
        </ImageOptionList>
        <ImagePreview exportImage={exportImage} />
      </StyledModalContent>
    );
  };

  return injectIntl(ExportImageModal);
};

export default ExportImageModalFactory;
